import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface Profile {
  token: string | null;
  userInfo: any | null;
  showLoginModal: boolean;
}

const initialState: Profile = {
  token: JSON.parse(localStorage.getItem("token") as string) || null,
  userInfo: JSON.parse(localStorage.getItem("user-info") as string) || null,
  showLoginModal: false,
};

export const counterSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    changeUserInfo: (state, action: PayloadAction<any>) => {
      localStorage.setItem("user-info", JSON.stringify(action.payload));
      state.userInfo = action.payload;
    },

    changeShowLoginModal: (state, action: PayloadAction<boolean>) => {
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
