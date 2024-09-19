import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "api/product/types";

export interface Product {
  productsList: IProduct[];
  assetsUrl: string;
}

const initialState: Product = {
  productsList: localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products") as string)
    : [],
  assetsUrl: process.env.REACT_APP_ASSETS_SERVER_API!,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.productsList = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
  },
});

export const { changeProducts } = productSlice.actions;

export default productSlice.reducer;
