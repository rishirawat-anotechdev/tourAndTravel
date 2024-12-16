import razorpayInstance from "../utils/razorpay.js";
import Order from "../models/orderModel.js";
import PaymentDetails from "../models/paymentDetailsModel.js";

export const adminVerifyPayment = async (req, res) => {
  try {
    const { paymentId, orderId } = req.body;

    // Validate inputs
    if (!paymentId || !orderId) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Fetch payment details from Razorpay using paymentId
    const payment = await razorpayInstance.payments.fetch(paymentId);
    if (!payment || payment.status !== 'captured') {
      return res.status(400).json({ success: false, message: "Payment not valid or not captured" });
    }

    // Find the related order using the razorpayOrderId
    const order = await Order.findOne({ razorpayOrderId: orderId });
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    // Verify if the order is already confirmed
    if (order.status === 'Confirmed') {
      return res.status(400).json({ success: false, message: "Order is already confirmed" });
    }

    // Update order status to 'Confirmed' and mark it as verified by the admin
    order.status = 'Confirmed';
    order.verifiedByAdmin = true;
    await order.save();

    // Save payment details and mark it as verified
    const paymentDetails = new PaymentDetails({
      transactionId: paymentId,
      method: 'Razorpay',
      amount: order.totalAmount,
      status: 'Completed',
      date: new Date(),
      userId: order.userId,
      orderId: order._id,
      packageId: order.packageId,
      paymentDetails: payment,
      paymentVerifiedByAdmin: true, 
    });

    await paymentDetails.save();

    res.status(200).json({ success: true, message: "Payment successfully verified by admin" });
  } catch (error) {
    console.error("Error in adminVerifyPayment:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
