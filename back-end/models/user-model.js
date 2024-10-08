import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String },
    phone: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: false },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

const userModel = mongoose.model.user || mongoose.model("user", userSchema);

export default userModel;
