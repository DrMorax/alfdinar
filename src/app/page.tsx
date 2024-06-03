import { Products } from "@/components/ui/dashboard/products";
import { getProducts } from "../lib/actions";

import { createClient } from "./utils/supabase/server";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";

export default async function Page() {
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
              key={product.id}
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
