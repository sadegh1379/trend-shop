import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "api/user/types";

export interface Profile {
  token: string | null;
  userInfo: IUser | null;
  showLoginModal: boolean;
  cartItems: {
    [key: string]: number;
  };
}

const initialState: Profile = {
  token: JSON.parse(localStorage.getItem("token") as string) || null,
  userInfo: JSON.parse(localStorage.getItem("user-info") as string) || null,
  showLoginModal: false,
  cartItems: {},
};

export const counterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        localStorage.setItem("token", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    changeUserInfo: (state, action: PayloadAction<IUser | null>) => {
      if (action.payload) {
        localStorage.setItem("user-info", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("user-info");
      }
      state.userInfo = action.payload;
    },

    changeShowLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },

    addToCart: (state, action: PayloadAction<boolean>) => {
      // start from this
      state.showLoginModal = action.payload;
    },

    onLogout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user-info");
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { changeToken, onLogout, changeUserInfo, changeShowLoginModal } =
  counterSlice.actions;

export default counterSlice.reducer;
