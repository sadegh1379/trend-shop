import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
});

const productModel =
  mongoose.model.product || mongoose.model("product", productSchema);

export default productModel;
