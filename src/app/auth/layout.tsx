// admin/layout.tsx
import { redirect } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) {
    return <div>{children}</div>;
  } else {
    redirect("/");
  }
}
