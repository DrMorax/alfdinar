import { getProducts } from "../lib/actions";

import { createClient } from "./utils/supabase/server";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  let user;
  if (!error && data?.user) {
    user = data.user.id;
    console.log(data);
  }
  const products = await getProducts(10);
  return (
    <div>
      <h1>{user ? user : `You are not logged in`}</h1>
      <h1>Products List</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id}>
            <p>Title: {product.title}</p>
            <p className="text-gray-400">Description: {product.description}</p>
            <p>Created At: {new Date(product.created_at).toLocaleString()}</p>
            <img src={product.imageurl} alt="" />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
