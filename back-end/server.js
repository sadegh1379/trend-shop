import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import cartRouter from "./routes/cart-route.js";
import orderRouter from "./routes/order-route.js";
import productRouter from "./routes/product-route.js";
import userRouter from "./routes/user-route.js";
import categoryRouter from "./routes/category-route.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/v1/product", productRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("API Working");
});

// db connect
connectDB();

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
