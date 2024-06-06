"use client";
import { type User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function Info({ user }: { user: User | null }) {
  const router = useRouter();

  // const handleSignout = async () => {
  //   const response = await fetch("/api/signout", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (response.ok) {
  //     router.push("/");
  //   } else {
  //     console.error("Sign-out failed");
  //   }
  // };

  return (
    <div>
      <h1>Email: {user?.email}</h1>
      {/* <button onClick={handleSignout}>Sign Out</button> */}
    </div>
  );
}
