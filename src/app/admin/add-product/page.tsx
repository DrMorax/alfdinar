"use client";
import { createClient } from "@/app/utils/supabase/client";
import React, { useState } from "react";

export default function Page() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    category: "",
    quantity: 0,
    imageurl: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleFileInputChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const supabase = createClient();
    const file = e.target.files?.[0];
    if (!file) return;
    const { data, error } = await supabase.storage
      .from("product_images")
      .upload(`product_${Date.now()}`, file);
    if (error) {
      console.log(error);
      return;
    }
    const fullPath = (data as any)?.fullPath;
    console.log("Full Path:", fullPath);
    const baseUrl =
      "https://dlhkuhcirpoxzdcqndrf.supabase.co/storage/v1/object/public/";
    const imageUrl = `${baseUrl}${fullPath}`;
    setProduct((prevProduct) => ({ ...prevProduct, imageurl: imageUrl }));
  };

  const handleAddProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const productToSend = {
        ...product,
        quantity: Number(product.quantity),
      };

      const response = await fetch("/api/add-product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productToSend),
      });
      if (response.ok) {
        alert("Product added successfully");
      } else {
        throw new Error("Error adding product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleAddProduct}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Image:
          <input
            type="file"
            onChange={handleFileInputChange}
            required
            id="fileInput"
          />
          Upload Image
        </label>
        {product.imageurl ? (
          <img src={product.imageurl} alt="Image preview"></img>
        ) : null}
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
