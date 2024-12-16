import express from "express";
import { closeTicket, createTicket, getTickets, updateTicketStatus } from "../controllers/ticketController.js";
import { verifyRole, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/",verifyToken, createTicket);
router.get("/",verifyToken, getTickets);
router.patch("/status",verifyToken, verifyRole("admin"), updateTicketStatus);
router.patch("/user/status",verifyToken, closeTicket);

export default router;
