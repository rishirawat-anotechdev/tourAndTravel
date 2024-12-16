import express from "express";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/categoryController.js";
import { verifyRole, verifyToken } from "../middleware/authMiddleware.js";


const router = express.Router();

// Category routes
router.post("/",verifyToken, verifyRole("admin"), createCategory);
router.get("/", getCategory);
router.put("/:id", verifyToken, verifyRole("admin"),  updateCategory);
router.delete("/:id", verifyToken, verifyRole("admin"),  deleteCategory);

export default router;
