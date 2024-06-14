import EditProductForm from "@/components/ui/dashboard/edit-product";
import { getProductById } from "@/lib/actions";
import type { Product } from "@/lib/definitions";

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const initialProduct = {
    id: product[0].id as string | number,
    title: product[0].title as string,
    description: product[0].description as string,
    category: product[0].category as string,
    quantity: product[0].quantity as number,
    imageurl: product[0].imageurl as string,
  };
  // console.log(initialProduct);

  return <EditProductForm initialProduct={initialProduct} />;
}
