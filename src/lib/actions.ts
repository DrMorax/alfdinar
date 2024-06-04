"use server";
import { revalidatePath } from "next/cache";
import sql from "../../db";
import { createClient } from "@/app/utils/supabase/server";
import type { Row } from "postgres";
import { redirect } from "next/navigation";

export async function getTodos() {
  try {
    const todos = await sql`
    select id
    from auth.users
    where id = user_id
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

export async function getProfile(id: string) {
  try {
    const user = sql`
  select id, email
  from auth.user
  where id = '${id}'`;
    return user;
  } catch (e) {
    console.error(`Error fetching user: ${e}`);
  }
}

export async function addToCart(id: string) {
  let user;
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data && !error) {
    user = data.user;
  } else {
    redirect("/auth/login");
  }

  let cart_id: Row[];
  cart_id = await sql`select cart_id from carts where user_id = ${user.id};`;

  if (cart_id.length === 0) {
    cart_id = await sql`insert into carts(user_id) values (${user.id});`;
  }
  cart_id = cart_id[0].cart_id;

  try {
    const product = await sql`
      insert into cart_items(cart_id, product_id, price, quantity) 
      values (${cart_id as any}, ${id}, 1000, 1);
    `;
    return "success";
  } catch (e) {
    console.log("Error adding to cart: ", e);
    throw e;
  }
}
