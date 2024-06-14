"use client";
import { updateProduct } from "@/lib/actions";
import { useState } from "react";

interface Product {
  id: string | number;
  title: string;
  description: string;
  category: string;
  quantity: number;
  imageurl: string;
}

interface EditProductProps {
  initialProduct: Product;
}
export default function EditProductForm({ initialProduct }: EditProductProps) {
  const [editedProduct, setEditedProduct] = useState(initialProduct);

  console.log(editedProduct);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevEditedProduct) => ({
      ...prevEditedProduct,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await updateProduct(editedProduct);
    console.log(response);
  }

  return (
    <form>
      <input
        onChange={(e) => handleChange(e)}
        name="title"
        type="text"
        placeholder="title"
        value={editedProduct.title}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="description"
        type="text"
        placeholder="description"
        value={editedProduct.description}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="category"
        type="text"
        placeholder="category"
        value={editedProduct.category}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="quantity"
        type="number"
        placeholder="quantity"
        value={editedProduct.quantity}
      />
      <input
        onChange={(e) => handleChange(e)}
        name="imageurl"
        type="file"
        placeholder="imageurl"
      />
      <button
        type="submit"
        onClick={(e) => {
          handleSubmit(e as React.FormEvent<HTMLFormElement>);
        }}
      >
        Submit
      </button>
    </form>
  );
}
