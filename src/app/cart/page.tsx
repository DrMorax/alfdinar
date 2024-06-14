import Cart from "@/components/ui/cart/cart";
import { getCartItems } from "@/lib/actions";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";
import { Checkout } from "../../components/ui/cart/checkout";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CheckoutProps {
  cart: CartItem[];
  total: number;
}

export default async function Page() {
  interface CartItem {
    productId: string;
    quantity: number;
  }

  const cartItems = await getCartItems();
  console.log(cartItems);

  const cartLength = cartItems.length;

  let i;
  let cart: CartItem[] = [];
  for (i = 0; i < cartLength; i++) {
    let proudct = {
      productId: cartItems[i].id,
      quantity: cartItems[i].quantity,
    };
    cart.push(proudct);
  }

  const totalPrice = cartItems.map((item) => item.price * item.quantity);
  const total = totalPrice.reduce((a, b) => a + b, 0);

  return (
    <Suspense fallback={<Loading />}>
      {cartItems.map((item) => (
        <Cart
          key={item.id}
          id={item.id}
          title={item.title}
          imageurl={item.imageurl}
          description={item.description}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
      <div
        dir="rtl"
        className="lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto"
      >
        <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
          السعر النهائي
        </h5>
        <h6 className="text-center md:text-right font-manrope font-bold text-3xl lead-10 text-indigo-600">
          IQD {total / 1000},000
        </h6>
      </div>
      <div className="max-lg:max-w-lg max-lg:mx-auto">
        <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
          سيتم اضافة رسوم التوصيل في مرحلة تثبيت الطلب
        </p>
        <Checkout cart={cart} total={total} />
      </div>
    </Suspense>
  );
}
