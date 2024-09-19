import express from "express";
import {
  addProduct,
  getAllProduct,
  getProduct,
  removeProduct,
  updateProduct,
} from "../controllers/product-controller.js";
import multer from "multer";

const productRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

productRouter.post("/", upload.single("image"), addProduct);
productRouter.get("/:id", getProduct);
productRouter.get("/", getAllProduct);
productRouter.delete("/:id", removeProduct);
productRouter.put("/:id", upload.single("image"), updateProduct);

export default productRouter;
