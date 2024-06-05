"use client";
import { type User } from "@supabase/supabase-js";
import { createClient } from "../utils/supabase/client";
import { revalidatePath } from "next/cache";

export default function Info({ user }: { user: User | null }) {
  const handleClick = async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    revalidatePath("/");
  };
  return (
    <div>
      <h1>Email: {user?.email}</h1>
      <button onClick={() => handleClick()}>Sign out</button>
    </div>
  );
}
