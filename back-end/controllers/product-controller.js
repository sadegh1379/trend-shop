import productModel from "../models/product-model.js";
import fs from "fs";

// Add product
const addProduct = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const { name, description, price, category } = req.body;

  const product = new productModel({
    name,
    description,
    price,
    category,
    image: image_filename,
  });

  try {
    await product.save();
    res.json({ success: true, message: "محصول با موفقیت اضافه شد" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در افزودن محصول" });
  }
};

// Get products
const getAllProduct = async (req, res) => {
  try {
    const { categoryId } = req.query;

    const filter = {};
    if (categoryId) {
      filter.category = categoryId;
    }

    const products = await productModel.find(filter);
    res.json({ success: true, data: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در دریافت محصولات" });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "شناسه محصول لازم است" });
  }

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "محصول یافت نشد" });
    }

    fs.unlink(`uploads/${product.image}`, (err) => {
      if (err) console.log("Error deleting image:", err);
    });

    await productModel.findByIdAndDelete(id);
    res.json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "خطا در حذف محصول" });
  }
};

// Update product
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "شناسه محصول لازم است" });
  }

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "محصول یافت نشد" });
    }

    if (req.file) {
      fs.unlink(`uploads/${product.image}`, (err) => {
        if (err) console.log("Error deleting image:", err);
      });
      product.image = req.file.filename;
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;

    await product.save();
    res.json({ success: true, data: product });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "خطا در به‌روزرسانی محصول" });
  }
};

export { addProduct, getAllProduct, removeProduct, updateProduct };
