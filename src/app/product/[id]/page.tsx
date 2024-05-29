import { getProductById } from "@/lib/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProductById(id);

  return (
    <div>
      {product?.map((item) => (
        <h1>{item?.title}</h1>
      ))}
    </div>
  );
}
