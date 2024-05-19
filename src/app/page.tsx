import { Products } from "@/components/ui/dashboard/products";
import { getProducts } from "../lib/actions";

import { createClient } from "./utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  let user;
  if (!error && data?.user) {
    user = data.user.id;
  }
  const products = await getProducts(10);
  return (
    <div>
      <h1>{user ? user : `You are not logged in`}</h1>
      <h1>Products List</h1>
      <div className="bg-white">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product, idx) => {
              const formatedDate = new Date(
                product.created_at
              ).toLocaleDateString();
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
        </div>
      </div>
    </div>
  );
}
