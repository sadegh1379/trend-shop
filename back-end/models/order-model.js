import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  zipCode: { type: String, required: true },
  status: { type: String, default: "processing" },
  date: { type: Date, default: Date.now() },
  paymentImage: { type: String, required: false },
  payment: { type: Boolean, default: false },
});

const orderModel = mongoose.model.order || mongoose.model("order", orderSchema);

export default orderModel;
