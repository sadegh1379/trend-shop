import express from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
} from "../controllers/category-controller.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", addCategory);
categoryRouter.put("/:categoryId", updateCategory);
categoryRouter.delete("/:categoryId", deleteCategory);

export default categoryRouter;
