// supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export async function getUserOnClient() {
  const supabase = createClient();
  let user;
  const { data, error } = await supabase.auth.getUser();
  if (!data || error) {
    user = null;
    return user;
  }
  if (data.user.aud === "admin") {
    user = "admin";
    return user;
  } else {
    user = "authenticated";
  }
}
