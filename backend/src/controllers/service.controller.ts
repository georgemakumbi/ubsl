import { Request, Response } from 'express';
import { PrismaClient, TransactionType, JobStatus } from '@prisma/client';

const prisma = new PrismaClient();

// 1. Get all service jobs (with optional filters)
export const getServiceJobs = async (req: Request, res: Response) => {
  try {
    const { status, technicianId } = req.query;
    
    const whereClause: any = {};
    if (status) whereClause.status = status;
    if (technicianId) whereClause.technicianId = Number(technicianId);

    const jobs = await prisma.serviceJob.findMany({
      where: whereClause,
      include: {
        customer: true,
        serialisedUnit: {
          include: { product: true }
        },
        technician: true,
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch service jobs' });
  }
};

// 2. Get a single service job by ID
export const getServiceJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const job = await prisma.serviceJob.findUnique({
      where: { id: Number(id) },
      include: {
        customer: true,
        serialisedUnit: { include: { product: true } },
        technician: true,
        parts: { include: { product: true } }
      }
    });

    if (!job) return res.status(404).json({ error: 'Service job not found' });
    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch service job' });
  }
};

// 3. Create a new service job
export const createServiceJob = async (req: Request, res: Response) => {
  try {
    const { customerId, serialisedUnitId, technicianId, reportedIssue } = req.body;

    if (!customerId || !serialisedUnitId || !technicianId || !reportedIssue) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newJob = await prisma.serviceJob.create({
      data: {
        customerId,
        serialisedUnitId,
        technicianId,
        reportedIssue,
        status: JobStatus.OPEN
      }
    });

    // Automatically update the serialised unit status to IN_REPAIR
    await prisma.serialisedUnit.update({
      where: { id: serialisedUnitId },
      data: { status: 'IN_REPAIR' }
    });

    res.status(201).json(newJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create service job' });
  }
};

// 4. Update a service job status / resolution notes
export const updateServiceJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, resolutionNotes } = req.body;

    const updatedData: any = { status, resolutionNotes };
    if (status === JobStatus.RESOLVED) {
      updatedData.resolvedAt = new Date();
    }

    const updatedJob = await prisma.serviceJob.update({
      where: { id: Number(id) },
      data: updatedData,
    });

    // If resolved, update the serialised unit status back to DEPLOYED
    if (status === JobStatus.RESOLVED) {
      await prisma.serialisedUnit.update({
        where: { id: updatedJob.serialisedUnitId },
        data: { status: 'DEPLOYED' }
      });
    }

    res.json(updatedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update service job' });
  }
};

// 5. Add spare parts to a job (automatically deducts from inventory)
export const addPartsToJob = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // serviceJobId
    const { productId, locationId, quantity } = req.body; // locationId is where the parts are taken from (e.g., technician's van)

    if (!productId || !locationId || !quantity) {
      return res.status(400).json({ error: 'Missing required part details' });
    }

    // Execute in a transaction to ensure stock is only deducted if the part is successfully logged
    const result = await prisma.$transaction(async (tx) => {
      // 1. Check if sufficient inventory exists
      const inventory = await tx.inventoryBalance.findUnique({
        where: { productId_locationId: { productId, locationId } }
      });

      if (!inventory || inventory.quantity < quantity) {
        throw new Error(`Insufficient stock for product ID ${productId} at location ID ${locationId}`);
      }

      // 2. Deduct inventory
      await tx.inventoryBalance.update({
        where: { productId_locationId: { productId, locationId } },
        data: { quantity: { decrement: quantity } }
      });

      // 3. Log stock transaction OUT
      await tx.stockTransaction.create({
        data: {
          productId,
          locationId,
          type: TransactionType.OUT,
          quantity,
          referenceType: 'ServiceJob',
          referenceId: Number(id),
        }
      });

      // 4. Log part usage on the service job
      const jobPart = await tx.serviceJobPart.create({
        data: {
          serviceJobId: Number(id),
          productId,
          quantity
        }
      });

      return jobPart;
    });

    res.status(201).json({ message: 'Part successfully added to job and inventory deducted', result });
  } catch (error: any) {
    console.error(error);
    res.status(400).json({ error: error.message || 'Failed to add parts to service job' });
  }
};
