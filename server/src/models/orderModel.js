import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  totalAmount: { type: mongoose.Schema.Types.Decimal128, required: true },
  status: { type: String, default: 'Pending', enum: ['Pending', 'Confirmed', 'Cancelled'] },
  razorpayOrderId: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  verifiedByAdmin: { type: Boolean, default: false },
},{ timestamps: true } );

const Order = mongoose.model('Order', orderSchema);
export default Order;