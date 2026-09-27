import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getSalesOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.salesOrder.findMany({
      include: {
        customer: true,
        user: true, // sales rep
        items: {
          include: {
            product: true
          }
        }
      },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sales orders' });
  }
};

export const createSalesOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, userId, items } = req.body;
    // items should be an array of { productId, quantity, unitPrice }

    if (!customerId || !userId || !items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Invalid order data' });
    }

    const totalAmount = items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);

    const newOrder = await prisma.salesOrder.create({
      data: {
        customerId,
        userId,
        totalAmount,
        status: 'DRAFT', // Default enum status
        items: {
          create: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            unitPrice: item.unitPrice
          }))
        }
      },
      include: {
        items: true
      }
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create sales order' });
  }
};
