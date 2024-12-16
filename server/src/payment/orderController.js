import razorpayInstance from "../utils/razorpay.js";
import Order from "../models/orderModel.js";
import Package from "../models/packageModel.js";

export const createOrder = async (req, res) => {
  try {
    const {  packageId, totalAmount } = req.body;
    const userId = req.user.id
    // Validate inputs
    if (!userId || !packageId || !totalAmount) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // Fetch package details to validate price
    const packageData = await Package.findById(packageId);
    if (!packageData) {
      return res
        .status(404)
        .json({ success: false, message: "Package not found" });
    }

    

    // Check if the provided totalAmount matches the package price
    if (packageData.status === "inactive") {
      return res.status(400).json({
        success: false,
        message: "Package is inactive. Booking not possible.",
      });
    }
    const actualPrice = packageData.discountPrice;
  
    
    if (totalAmount !== actualPrice) {
      return res.status(400).json({
        success: false,
        message: "Price mismatch. Possible tampering detected.",
      });
    }

    // Create Razorpay order
    const options = {
      amount: Math.round(totalAmount * 100), 
      currency: "INR",
      receipt: `order_rcptid_${new Date().getTime()}`,
    };

    const razorpayOrder = await razorpayInstance.orders.create(options);

    // Save order to DB
    const order = new Order({
      userId,
      packageId,
      totalAmount,
      status: "Pending",
      orderDate: new Date(),
      razorpayOrderId: razorpayOrder.id, 
    });

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order created successfully",
      razorpayOrderId: razorpayOrder.id,
    });
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
