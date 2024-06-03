"use client";
import { deleteProduct } from "@/lib/actions";
import { Button } from "../button";
import { TrashIcon } from "@/assets/icons/trash";
import { PencilIcon } from "@/assets/icons/pencil";

export function DeleteProduct(props: any) {
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
        variant={"destructive"}
        className="w-[50%]"
        onClick={() => handleDelete()}
      >
        <TrashIcon color="#ffffff" />
      </Button>
    </>
  );
}

export function EditProduct(props: any) {
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
        variant={"default"}
        className="w-[50%] flex-start"
        onClick={() => handleDelete()}
      >
        <PencilIcon color="#ffffff" />
      </Button>
    </>
  );
}
