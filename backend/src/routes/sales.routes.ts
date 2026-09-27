import { Router } from 'express';
import { getSalesOrders, createSalesOrder } from '../controllers/sales.controller';

const router = Router();

router.get('/', getSalesOrders);
router.post('/', createSalesOrder);

export default router;
