"use client";

import { deleteProduct } from "@/lib/actions";
import { Button } from "../button";

export default function DeleteProduct(props: any) {
  const id = props.id;
  return (
    <>
      <Button
        variant={"destructive"}
        onClick={async () => await deleteProduct(id)}
      >
        Delete
      </Button>
    </>
  );
}
