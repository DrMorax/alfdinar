import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import cartReducer from "./cart-slice";
import userReducer from "./user-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
