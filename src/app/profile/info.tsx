"use client";
import { type User } from "@supabase/supabase-js";

export default function Info({ user }: { user: User | null }) {
  return (
    <div>
      <h1>Email: {user?.email}</h1>
    </div>
  );
}
