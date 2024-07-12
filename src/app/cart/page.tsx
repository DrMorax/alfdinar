import Cart from "@/components/ui/cart/cart";
import { getCartItems } from "@/lib/actions";
import { Checkout } from "../../components/ui/cart/checkout";

interface CartItem {
  productId: string;
  quantity: number;
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
    <>
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
        className="border-b border-gray-200 pb-6 max-lg:mx-auto max-lg:max-w-lg lg:px-6"
      >
        <h5 className="font-manrope w-full text-2xl font-semibold leading-9 text-gray-900 max-md:mb-4 max-md:text-center">
          السعر النهائي
        </h5>
        <h6 className="font-manrope lead-10 text-center text-3xl font-bold text-indigo-600 md:text-right">
          IQD {total / 1000},000
        </h6>
      </div>
      <div className="max-lg:mx-auto max-lg:max-w-lg">
        <p className="mb-5 mt-6 text-center text-base font-normal leading-7 text-gray-500">
          سيتم اضافة رسوم التوصيل في مرحلة تثبيت الطلب
        </p>
        <Checkout cart={cart} total={total} />
      </div>
    </>
  );
}
