"use server";
import sql from "../../db";
import { revalidatePath } from "next/cache";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from "next/navigation";
import type { Row } from "postgres";

export async function getUser() {
  let user;
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (data && !error) {
    user = data.user.id;
    return user;
  } else {
    redirect("/auth/login");
  }
}

export async function getAdmin() {
  const userId = await getUser();

  const fetchedAud = await sql`
  select aud from auth.users
  where id = ${userId};`;

  const aud = fetchedAud[0]?.aud;
  return aud;
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
    let product = await sql`
  SELECT id, title, description, imageurl, quantity, category
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

export async function deleteImage(id: string | number) {
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
  } catch (e) {
    console.log("Error deleting image: ", e);
    throw e;
  }
}

export async function addProduct(
  title: string,
  description: string,
  category: string,
  quantity: number,
  imageurl: string
) {
  const aud = await getAdmin();
  if (aud === "admin") {
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
  } else {
    throw new Error("Not authorized");
  }
}

export async function updateProduct(product: {
  id: string | number;
  title: string;
  description: string;
  category: string;
  quantity: number;
  imageurl: string;
}) {
  const aud = await getAdmin();

  let originalImage =
    await sql`select imageurl from products where id = ${product.id};`;

  if (aud === "admin") {
    if (
      originalImage[0]?.imageurl !== null &&
      originalImage[0]?.imageurl !== product.imageurl
    ) {
      deleteImage(product.id);
      const newImage =
        await sql`update products set imageurl = ${product.imageurl} where id = ${product.id};`;
    }

    try {
      const updatedProduct = await sql`
        update products
        set title = ${product.title},
        description = ${product.description},
        category = ${product.category},
        quantity = ${product.quantity}
        where id = ${product.id};
      `;
      return updatedProduct;
    } catch (e) {
      console.log("Error updating product: ", e);
      throw e;
    }
  } else {
    throw new Error("Not authorized");
  }
}

export async function deleteProduct(id: string | number) {
  const aud = await getAdmin();

  if (aud === "admin") {
    deleteImage(id);
    try {
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
  } else {
    throw new Error("Not authorized");
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
  const user = await getUser();

  let cart_id: Row[];
  cart_id = await sql`select cart_id from carts where user_id = ${user};`;

  if (cart_id.length === 0) {
    cart_id = await sql`insert into carts(user_id) values (${user});`;
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

export async function getCartItems() {
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
  const user = await getUser();

  const order = await sql`
  insert into orders(user_id, total_amount)
  values (${user}, ${total});`;

  let order_id = await sql`
  select order_id from orders
  where user_id = ${user}
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
