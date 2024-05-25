"use client";
import { deleteProduct } from "@/lib/actions";
import { Button } from "../button";
import { PencilIcon } from "@/assets/icons/pencil";

export default function EditProduct(props: any) {
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
      <Button
        variant={"warning"}
        className="w-[50%] flex-start"
        onClick={() => handleDelete()}
      >
        <PencilIcon color="#ffffff" />
      </Button>
    </>
  );
}
