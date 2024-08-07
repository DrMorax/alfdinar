import Info from "./info";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/auth/login");
  }
  return (
    <>
      <Info user={user} />
    </>
  );
}
