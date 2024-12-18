import express from "express";
import {
  createBlog,
  deleteBlog,
  updateBlog,
} from "../controllers/BlogController.js";
import { verifyRole, verifyToken } from "../middleware/authMiddleware.js";
import {
  createCategory,
  deleteCategory,
  getCategoriesWithPackageCount,
  updateCategory,
} from "../controllers/categoryController.js";
import {
  createCoupon,
  deleteCoupon,
  getCouponsStats,
  updateCouponStatus,
} from "../controllers/CouponController.js";
import {
  createTourMap,
  deleteTourMap,
  updateTourMap,
} from "../controllers/tourController.js";
import {
  createPackage,
  deletePackage,
  getAllPackages,
  getPackageById,
  getPackagesByDestination,
  updatePackage,
} from "../controllers/packageController.js";
import {
  deleteTestimonial,
  getReviews,
  updateTestimonial,
} from "../controllers/testimonialController.js";
import {
  closeTicket,
  deleteTicket,
  getTicketsStats,
  updateTicketStatus,
} from "../controllers/ticketController.js";
import { deleteUser, updateUserStatus } from "../controllers/authController.js";

const router = express.Router();

//Admin Blog routes
router.post("/blog", verifyToken, verifyRole("admin"), createBlog);
router.put("/blog/:id", verifyToken, verifyRole("admin"), updateBlog);
router.delete("/blog:id", verifyToken, verifyRole("admin"), deleteBlog);

//Admin Category routes
router.post("/category", verifyToken, verifyRole("admin"), createCategory);
router.put("/category/:id", verifyToken, verifyRole("admin"), updateCategory);
router.delete(
  "/category/:id",
  verifyToken,
  verifyRole("admin"),
  deleteCategory
);
router.get("/category/getAllStatesOfCategory", getCategoriesWithPackageCount);

//////////////////// Admin Package routes //////////////////////
// Package routes
router.post("/package", verifyToken, verifyRole("admin"), createPackage);
router.get(
  "/package/allData",
  verifyToken,
  verifyRole("admin"),
  getPackagesByDestination
);
router.get(
  "/getPackageById/:packageId",
  verifyToken,
  verifyRole("admin"),
  getPackageById
);
router.get(
  "/package/getAllPackages",
  verifyToken,
  verifyRole("admin"),
  getAllPackages
);
router.put(
  "/package/update/:id",
  verifyToken,
  verifyRole("admin"),
  updatePackage
);
router.delete(
  "/package/delete/:id",
  verifyToken,
  verifyRole("admin"),
  deletePackage
);

// admin routes for Tour Map
router.post(
  "/package/tour-maps",
  verifyToken,
  verifyRole("admin"),
  createTourMap
);
router.put(
  "/package/tour-maps/:id",
  verifyToken,
  verifyRole("admin"),
  updateTourMap
);
router.delete(
  "/package/tour-maps/:id",
  verifyToken,
  verifyRole("admin"),
  deleteTourMap
);

// Admin Coupon routes
router.post("/coupon", verifyToken, verifyRole("admin"), createCoupon);
router.get(
  "/coupon/allstats",
  verifyToken,
  verifyRole("admin"),
  getCouponsStats
);
router.put("/coupon/:id", verifyToken, verifyRole("admin"), updateCouponStatus);
router.delete("/coupon/:id", verifyToken, verifyRole("admin"), deleteCoupon);

// Admin Testimonial Routes
router.put("/review/:id", verifyToken, verifyRole("admin"), updateTestimonial);
router.delete(
  "/review/:id",
  verifyToken,
  verifyRole("admin"),
  deleteTestimonial
);
router.get(
  "/review/getAllReview",
  verifyToken,
  verifyRole("admin"),
  getReviews
);

// Admin Tickets Routes
router.get(
  "/ticket/allticketsStats",
  verifyToken,
  verifyRole("admin"),
  getTicketsStats
);
router.patch(
  "/ticket/status/:ticketId",
  verifyToken,
  verifyRole("admin"),
  updateTicketStatus
);
router.delete(
  "/tickets/:ticketId",
  verifyToken,
  verifyRole("admin"),
  deleteTicket
);
router.patch(
  "/ticket/user/status",
  verifyToken,
  verifyRole("admin"),
  closeTicket
);

// Admin Users Routes
router.delete("/user/:userId", deleteUser);
router.put("/user/:userId/status", updateUserStatus);

export default router;
