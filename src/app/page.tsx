import { Products } from "@/components/ui/dashboard/products";
import { getProducts } from "../lib/actions";

import { createClient } from "./utils/supabase/server";

export default async function Page() {
  // const supabase = createClient();
  // const { data, error } = await supabase.auth.getUser();
  // let user;
  // if (!error && data?.user) {
  //   user = data.user.id;
  // }
  const products = await getProducts(10);
  return (
    <div
      className="relative w-full flex snap-x snap-mandatory overflow-x-auto"
      dir="rtl"
    >
      {products?.map((product, idx) => {
        const formatedDate = new Date(product.created_at).toLocaleDateString();
        return (
          <>
            <Products
              link={`/product/${product.id}`}
              key={idx}
              title={product.title}
              imageurl={product.imageurl}
              date={formatedDate}
              price="1000 IQD"
            />
          </>
        );
      })}
    </div>
  );
}
