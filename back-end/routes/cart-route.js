import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controllers/cart-controller.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.get("/", authMiddleware, getCart);
cartRouter.delete("/:id", authMiddleware, removeFromCart);
cartRouter.post("/", authMiddleware, addToCart);

export default cartRouter;
