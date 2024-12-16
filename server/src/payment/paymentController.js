import crypto from 'crypto';
import PaymentDetails from '../models/paymentDetailsModel.js';
import Order from '../models/orderModel.js';

export const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Validate inputs
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    // Verify the payment signature
    const generatedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');
      console.log(generatedSignature, "sig");
      

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: 'Invalid payment signature' });
    }

    // Find the order in the database
    const order = await Order.findOne({ razorpayOrderId: razorpay_order_id });
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (order.status === 'Confirmed') {
      return res.status(400).json({ success: false, message: 'Order already confirmed' });
    }

    // Save payment details
    const paymentDetails = new PaymentDetails({
      transactionId: razorpay_payment_id,
      method: 'Razorpay',
      amount: order.totalAmount,
      status: 'Completed',
      date: new Date(),
      userId: order.userId,
      orderId: order._id,
      packageId: order.packageId,
      paymentDetails: req.body,
    });

    await paymentDetails.save();

    // Update order status
    order.status = 'Confirmed';
    await order.save();

    res.status(200).json({ success: true, message: 'Payment verified ' });
  } catch (error) {
    console.error('Error in verifyPayment:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};


export const getPayments = async (req, res) => {
  try {
    const payments = await PaymentDetails.find().populate('userId').populate('orderId').populate('packageId');
    
    res.status(200).json({
      success: true,
      payments,
    });
  } catch (error) {
    console.error('Error in getPayments:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
