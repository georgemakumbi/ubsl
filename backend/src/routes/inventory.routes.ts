import { Router } from 'express';
import { getInventory, adjustStock } from '../controllers/inventory.controller';

const router = Router();

router.get('/', getInventory);
router.post('/adjust', adjustStock);

export default router;
