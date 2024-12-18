import express from "express";
import {
  createCoupon,
  getAllCoupons,
  applyCoupon,
  deleteCoupon,
  updateCouponStatus,
  getCouponsStats,
} from "../controllers/CouponController.js";
import { verifyToken, verifyRole } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new coupon (Admin Only)
router.post("/", verifyToken, verifyRole("admin"), createCoupon);

// Get all coupons (Admin Only)
router.get("/allstats", getCouponsStats);
router.get("/", verifyToken, verifyRole("admin"), getAllCoupons);

// Apply a coupon
router.post("/apply", verifyToken, applyCoupon);

// Update coupon status (Admin Only)
router.put("/:id", verifyToken, verifyRole("admin"), updateCouponStatus);

// Delete a coupon (Admin Only)
router.delete("/:id", verifyToken, verifyRole("admin"), deleteCoupon);

export default router;
