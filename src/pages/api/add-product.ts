"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import { addProduct } from "@/app/lib/actions";

type ProductRequestBody = {
  title: string;
  description: string;
  category: string;
  quantity: number;
  imageurl: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { title, description, category, quantity, imageurl } =
        req.body as ProductRequestBody;
      await addProduct(title, description, category, quantity, imageurl);
      res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Error adding product: " + error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
