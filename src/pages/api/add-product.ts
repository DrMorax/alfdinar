"use server";
import type { NextApiRequest, NextApiResponse } from "next";
import { addProduct } from "@/lib/actions";
import { type Product } from "@/lib/definitions";
import adminCheck from "./adminCheck";

export default adminCheck(async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { title, description, category, quantity, imageurl } =
        req.body as Product;
      await addProduct(title, description, category, quantity, imageurl);
      res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
      console.error("Error adding product:", error);
      res.status(500).json({ error: "Error adding product: " + error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
});
