import DeleteProduct from "@/components/ui/dashboard/delete-button";
import { Products } from "@/components/ui/dashboard/products";
import { getProducts } from "@/lib/actions";

export default async function Page() {
  const products = await getProducts(100);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product, idx) => (
            <>
              <Products
                key={idx}
                title={product.title}
                imageurl={product.imageurl}
                price="1000 IQD"
              />
              <DeleteProduct id={product.id} />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
