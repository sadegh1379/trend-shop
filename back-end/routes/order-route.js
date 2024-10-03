import express from "express";
import {
  deleteOrder,
  getOrderList,
  placeOrder,
  updateOrder,
} from "../controllers/order-controller.js";
import authMiddleware from "../middleware/auth.js";
import multer from "multer";

const orderRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: "uploads/orders",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

orderRouter.post(
  "/",
  [upload.single("paymentImage"), authMiddleware],
  placeOrder
);
orderRouter.get("/", authMiddleware, getOrderList);
orderRouter.put("/:orderId", upload.single("paymentImage"), updateOrder);
orderRouter.delete("/:orderId", authMiddleware, deleteOrder);

export default orderRouter;
