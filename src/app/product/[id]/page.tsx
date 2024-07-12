import { getProductById } from "@/lib/actions";
import Details from "@/components/ui/product/details";
import { Suspense } from "react";
import { Spinner } from "@/assets/icons/spinner";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProductById(id);

  return (
    <>
      {product?.map((item) => (
        <Details
          key={item.id}
          productId={id}
          imageurl={item.imageurl}
          title={item.title}
          description={item.description}
          category="Accessories"
          sub_category="school-accessories"
        />
      ))}
    </>
  );
}
