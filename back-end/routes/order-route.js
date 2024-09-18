import express from "express";
import {
  deleteOrder,
  getOrderList,
  placeOrder,
  updateOrder,
} from "../controllers/order-controller.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/", authMiddleware, getOrderList);
orderRouter.put("/:orderId", authMiddleware, updateOrder);
orderRouter.delete("/:orderId", authMiddleware, deleteOrder);

export default orderRouter;
