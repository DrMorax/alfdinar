"use server";
import { revalidatePath } from "next/cache";
import sql from "../../db";
import { createClient } from "@/app/utils/supabase/server";

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

export async function getProductById(id: string) {
  try {
    const product = await sql`
      SELECT id, title, description, imageurl
      FROM products
      WHERE id = ${id}
      ORDER BY created_at DESC
      LIMIT 1
    `;
    return product;
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
) {
  try {
    const product = await sql`
      insert into products (title, description, category, quantity, imageUrl) 
      values (${title}, ${description}, ${category}, ${quantity}, ${imageurl});
    `;
    return product;
  } catch (e) {
    console.log("Error adding product: ", e);
    throw e;
  }
}

export async function deleteProduct(id: any) {
  try {
    const result = await sql`
      select imageurl from products
      where id = ${id};`;

    const imageurl = result[0]?.imageurl;

    if (imageurl) {
      const slicedImageurl = imageurl.slice(81);
      const supabase = createClient();
      const { data, error } = await supabase.storage
        .from("product_images")
        .remove([slicedImageurl]);

      if (error) {
        console.log("Error removing image: ", error);
        throw new Error("Error removing image");
      } else {
        console.log("Image removed successfully");
        console.log("URL: ", slicedImageurl);
      }
    } else {
      console.log("Image URL not found.");
    }

    const product = await sql`
      delete from products
      where id = ${id};`;

    if (!product) {
      throw new Error("Product deletion failed");
    }

    revalidatePath("/admin");
    return product;
  } catch (e) {
    console.log("Error deleting product: ", e);
    throw e;
  }
}
