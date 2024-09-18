import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducer/profile";
import themeReducer from "./reducer/theme";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
