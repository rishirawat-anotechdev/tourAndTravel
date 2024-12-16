import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js"
import { verifyRole, verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/',verifyToken, verifyRole("admin"), createBlog); 
router.get('/', getAllBlogs); 
router.get('/:id', getBlogById); 
router.put('/:id',verifyToken, verifyRole("admin"), updateBlog); 
router.delete('/:id',verifyToken, verifyRole("admin"), deleteBlog); 

export default router;
