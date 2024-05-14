import { revalidatePath } from "next/cache";
import sql from "../../../db";

export async function getTodos() {
  try {
    const todos = await sql`
    select *
    from todos
  `;

    return todos;
  } catch (e) {
    console.log("Error fetching todos: ", e);
  }
}

export async function getProducts(limit: number) {
  try {
    const products = await sql`
      SELECT id, title, description, created_at, imageurl, category, sub_category
      FROM products
      ORDER BY created_at DESC
      LIMIT ${limit}
    `;
    return products;
  } catch (e) {
    console.log("Error fetching products: ", e);
  }
}

export async function addProduct(
  title: string,
  description: string,
  category: string,
  quantity: number,
  imageurl: string
): Promise<void> {
  try {
    const products = await sql`
      insert into products (title, description, category, quantity, imageUrl) 
      values (${title}, ${description}, ${category}, ${quantity}, ${imageurl});
    `;
  } catch (e) {
    console.log("Error adding product: ", e);
    throw e;
  }
}
