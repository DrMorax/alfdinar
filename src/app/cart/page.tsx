import Cart from "@/components/ui/cart/cart";
import { getCartItems } from "@/lib/actions";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  const id = data?.user?.id;

  const cartItems = await getCartItems(id);
  console.log(cartItems);

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
    </Suspense>
  );
}
