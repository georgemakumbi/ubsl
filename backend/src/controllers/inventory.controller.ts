import { Request, Response } from 'express';
import { PrismaClient, TransactionType } from '@prisma/client';

const prisma = new PrismaClient();

export const getInventory = async (req: Request, res: Response) => {
  try {
    const balances = await prisma.inventoryBalance.findMany({
      include: {
        product: true,
        location: true,
      },
    });
    res.json(balances);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inventory balances' });
  }
};

export const adjustStock = async (req: Request, res: Response) => {
  try {
    const { productId, locationId, quantity, type, referenceType, referenceId } = req.body;

    if (!productId || !locationId || quantity === undefined || !type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Run this inside a transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // 1. Log the transaction
      const stockTx = await tx.stockTransaction.create({
        data: {
          productId,
          locationId,
          type: type as TransactionType,
          quantity,
          referenceType,
          referenceId,
        },
      });

      // 2. Determine quantity modifier
      let qtyModifier = 0;
      if (type === TransactionType.IN) {
        qtyModifier = quantity;
      } else if (type === TransactionType.OUT) {
        qtyModifier = -quantity;
      } else {
        // Transfer logic could be more complex (needs source and destination)
        // Ignoring full transfer implementation for this MVP
        qtyModifier = 0;
      }

      // 3. Upsert inventory balance
      const balance = await tx.inventoryBalance.upsert({
        where: {
          productId_locationId: {
            productId,
            locationId,
          },
        },
        update: {
          quantity: {
            increment: qtyModifier,
          },
        },
        create: {
          productId,
          locationId,
          quantity: qtyModifier,
        },
      });

      return { stockTx, balance };
    });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to adjust stock' });
  }
};
