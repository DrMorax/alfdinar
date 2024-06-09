"use server";
import { revalidatePath } from "next/cache";
import sql from "../../db";
import { createClient } from "@/app/utils/supabase/server";
import type { Row } from "postgres";
import { redirect } from "next/navigation";

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

    const deletedProduct = await sql`
      delete from products
      where id = ${id};`;

    if (!deletedProduct) {
      throw new Error("Product deletion failed");
    }

    revalidatePath("/admin");
    return deletedProduct;
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

export async function checkCart() {
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

  return cart_id;
}

export async function emptyCart() {
  const cart_id = await checkCart();

  const cart_items = await sql`
  delete from cart_items
  where cart_id = ${cart_id as any};`;
  return cart_items;
}

export async function addToCart(id: string) {
  const cart_id = await checkCart();
  try {
    const checkProduct = await sql`
    select * from cart_items
    where product_id = ${id}
    AND cart_id = ${cart_id as any};`;
    let product;
    if (checkProduct.length === 0) {
      product = await sql`
      insert into cart_items(cart_id, product_id, price, quantity) 
      values (${cart_id as any}, ${id}, 1000, 1);
    `;
    } else {
      product = await sql`
      update cart_items
      set quantity = quantity + 1
      where product_id = ${id}
      AND cart_id = ${cart_id as any};
    `;
    }
    return "success";
  } catch (e) {
    console.log("Error adding to cart: ", e);
    throw e;
  }
}

export async function getCartItems(id: string) {
  const cart_id = await checkCart();

  const cart_items = await sql`
  select product_id from cart_items
  where cart_id = ${cart_id as any};`;

  const product_ids = cart_items.map((item) => item.product_id);

  const products = await sql`
  select
    products.id,
    products.title,
    products.description,
    products.imageurl,
    cart_items.quantity,
    cart_items.price
  from products
  inner join cart_items on cart_items.product_id = products.id
  where cart_items.cart_id = ${cart_id as any}
  AND cart_items.product_id = ANY(${product_ids});`;

  return products;
}

export async function makeOrder(
  cart: { productId: string; quantity: number }[],
  total: number
) {
  let user;
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data && !error) {
    user = data.user;
  } else {
    redirect("/auth/login");
  }

  const order = await sql`
  insert into orders(user_id, total_amount)
  values (${user.id}, ${total});`;

  let order_id = await sql`
  select order_id from orders
  where user_id = ${user.id}
  order by order_id desc
  limit 1;`;

  order_id = order_id[0].order_id;

  let i;
  for (i = 0; i < cart.length; i++) {
    console.log(cart[0]);
    let order_items = await sql`
    insert into order_items(order_id, product_id, quantity)
    values (${order_id as any}, ${cart[i].productId}, ${cart[i].quantity});
  `;
  }

  const cart_id = await emptyCart();
  revalidatePath("/cart");
  return "success";
}
