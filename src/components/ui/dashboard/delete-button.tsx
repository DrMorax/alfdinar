"use client";
import { deleteProduct } from "@/lib/actions";
import { Button } from "../button";

export default function DeleteProduct(props: any) {
  const id = props.id;
  async function handleDelete() {
    try {
      const deletedProduct = await deleteProduct(id);
      return deletedProduct;
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  return (
    <>
      <Button variant={"destructive"} onClick={() => handleDelete()}>
        Delete
      </Button>
    </>
  );
}
