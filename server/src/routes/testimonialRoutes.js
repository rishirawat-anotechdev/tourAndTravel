import express from 'express';
import {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';
import { verifyRole, verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/',verifyToken, createTestimonial); 
router.get('/', getAllTestimonials); 
router.get('/:id', getTestimonialById);  
router.put('/:id',verifyToken, verifyRole("admin"), updateTestimonial);  
router.delete('/:id',verifyToken, verifyRole("admin"), deleteTestimonial); 

export default router;
