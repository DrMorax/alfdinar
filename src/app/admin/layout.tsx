// admin/layout.tsx
import { notFound } from "next/navigation";
import { createClient } from "../utils/supabase/server";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  if (!error && data.user?.id === process.env.ADMIN_ID) {
    return <div>{children}</div>;
  } else {
    notFound();
  }
}
