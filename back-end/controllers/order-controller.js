import orderModel from "../models/order-model.js";
import userModel from "../models/user-model.js";

const placeOrder = async (req, res) => {
  const { userId, items, amount, address } = req.body;
  try {
    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "سفارش با موفقیت ثبت شد." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در ثبت صفارش" });
  }
};

const getOrderList = async (req, res) => {
  const userId = req.body.userId;
  try {
    const orders = await orderModel.find({ userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "خطا در دریافت لیست سفارش‌ها" });
  }
};

const updateOrder = async (req, res) => {
  const userId = req.body.userId;
  const { orderId } = req.params;
  const { status, address, items, amount } = req.body;

  try {
    const order = await orderModel.findOne({ _id: orderId, userId });

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "سفارش پیدا نشد" });
    }

    order.status = status || order.status;
    order.address = address || order.address;
    order.items = items || order.items;
    order.amount = amount || order.amount;

    const updatedOrder = await order.save();

    res.json({
      success: true,
      message: "سفارش با موفقیت بروزرسانی شد",
      data: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در بروزرسانی سفارش" });
  }
};

const deleteOrder = async (req, res) => {
  const userId = req.body.userId;
  const { orderId } = req.params;

  try {
    const order = await orderModel.findOneAndDelete({ _id: orderId, userId });

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "سفارش پیدا نشد" });
    }

    res.json({ success: true, message: "سفارش با موفقیت حذف شد" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در حذف سفارش" });
  }
};

export { deleteOrder, getOrderList, placeOrder, updateOrder };
