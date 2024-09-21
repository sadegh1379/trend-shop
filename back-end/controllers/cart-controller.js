import userModel from "../models/user-model.js";

// add to cart
const addToCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = await userData.cartData;

    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({
      success: true,
      message: "محصول با موفقیت اضافه شد",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "مشکل در اضافه کردن محصول",
    });
  }
};

// remove from cart
const removeFromCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    let cartData = userData.cartData;

    if (cartData[req.params.id]) {
      cartData[req.params.id] -= 1;
      if (cartData[req.params.id] === 0) {
        delete cartData[req.params.id];
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "محصول در سبد خرید وجود ندارد",
      });
    }

    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({
      success: true,
      message: "محصول با موفقیت حذف شد",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "مشکل در حذف کردن محصول",
    });
  }
};

// get cart
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findOne({ _id: req.body.userId });
    res.json({
      success: true,
      data: userData.cartData,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "مشکل در دریافت سبد خرید",
    });
  }
};

export { addToCart, getCart, removeFromCart };
