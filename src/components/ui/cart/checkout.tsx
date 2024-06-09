"use client";
import React, { useState } from "react";
import { makeOrder } from "../../../lib/actions";
import { useToast } from "../use-toast";
import { Spinner } from "@/assets/icons/spinner";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CheckoutProps {
  cart: CartItem[];
  total: number;
}

export const Checkout: React.FC<CheckoutProps> = ({ cart, total }) => {
  const toast = useToast();

  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const orderHandler = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const order = await makeOrder(cart, total);
      if (order === "success") {
        toast.toast({
          title: "نجاح",
          description:
            "تم تثبيت طلبك بنجاح. يمكنك متابعة حالة الطلب من خلال قسم الحساب وسيتم التواصل معك عبر رقم الهاتف",
          variant: "success",
        });
      }
    } catch (error) {
      setError(true);

      toast.toast({
        title: "مشكلة",
        description: "حدث خلل اثناء اضافة المنتج للسلة, حاول مرة اخرى",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      disabled={isLoading || cart.length === 0}
      onClick={() => {
        orderHandler();
      }}
      className={`${error ? "bg-red-500 text-white" : ""} 
      ${
        isLoading ? "bg-indigo-300" : "bg-indigo-600"
      } flex justify-center gap-2 rounded-full py-4 px-6 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700`}
    >
      {isLoading ? <Spinner w="1.5rem" h="1.5rem" /> : null}
      {error ? "حاول مرة اخرى :(" : "اكمال الشراء"}
    </button>
  );
};
