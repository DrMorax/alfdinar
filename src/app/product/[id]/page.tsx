import { getProductById } from "@/lib/actions";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const fetchedProduct = await getProductById(id);
  return (
    <div>
      {fetchedProduct?.map((item) => (
        <h1 key={item.id}>{item?.title}</h1>
      ))}
    </div>
  );
}
