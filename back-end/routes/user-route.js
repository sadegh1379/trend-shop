import express from "express";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/user-controller.js";
import authMiddleware from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/", authMiddleware, getUser);

export default userRouter;
