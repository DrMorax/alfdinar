import { Product } from "@/lib/definitions";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  product: Product;
  quantity: number;
};

type Cart = CartItem[];

const initialState: CartItem = {
  product: {
    id: 0,
    title: "",
    description: "",
    category: "",
    quantity: 0,
    imageurl: "",
  },
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
