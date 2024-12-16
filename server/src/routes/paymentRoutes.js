import express from 'express';
import { createOrder } from "../payment/orderController.js"
import { verifyRole, verifyToken } from '../middleware/authMiddleware.js';
import { getPayments, verifyPayment } from '../payment/paymentController.js';

const router = express.Router();

router.post('/order',verifyToken,createOrder); 




//Verify the payments
router.post('/verify',verifyToken, verifyPayment);
router.get('/',verifyToken, getPayments);


export default router;
