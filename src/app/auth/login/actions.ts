"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "../../utils/supabase/server";

interface Response {
  error?: string;
  success?: boolean;
}

export async function login(formData: FormData): Promise<Response> {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message }; // Return the error message
  }

  revalidatePath("/", "layout");
  return { success: true }; // Return success status
}

export async function signup(formData: FormData): Promise<Response> {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return { error: error.message }; // Return the error message
  }

  revalidatePath("/", "layout");
  return { success: true }; // Return success status
}
