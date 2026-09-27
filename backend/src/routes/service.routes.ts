import { Router } from 'express';
import { 
  getServiceJobs, 
  getServiceJobById, 
  createServiceJob, 
  updateServiceJob, 
  addPartsToJob 
} from '../controllers/service.controller';
import { authenticate, requireRole } from '../middleware/auth.middleware';
import { Role } from '@prisma/client';

const router = Router();

// Ensure user is authenticated for all service routes
router.use(authenticate);

// View jobs (Admins, Technicians, Sales can view)
router.get('/', requireRole([Role.ADMIN, Role.TECHNICIAN, Role.SALES]), getServiceJobs);
router.get('/:id', requireRole([Role.ADMIN, Role.TECHNICIAN, Role.SALES]), getServiceJobById);

// Create/Update jobs (Admins and Technicians)
router.post('/', requireRole([Role.ADMIN, Role.TECHNICIAN]), createServiceJob);
router.patch('/:id', requireRole([Role.ADMIN, Role.TECHNICIAN]), updateServiceJob);

// Add parts to a job
router.post('/:id/parts', requireRole([Role.ADMIN, Role.TECHNICIAN]), addPartsToJob);

export default router;
