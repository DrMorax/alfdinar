"use client";
import React from "react";
import { makeOrder } from "../../lib/actions";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CheckoutProps {
  cart: CartItem[];
  total: number;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, total }) => {
  return (
    <button
      onClick={() => makeOrder(cart, total)}
      className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700"
    >
      اكمال الشراء
    </button>
  );
};
