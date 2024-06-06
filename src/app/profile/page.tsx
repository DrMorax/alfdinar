import Info from "./info";
import { createClient } from "../utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const supabase = createClient();
export default async function Page() {
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
