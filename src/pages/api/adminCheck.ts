import type { NextApiRequest, NextApiResponse } from "next";
import createClient from "@/app/utils/supabase/api";

export default function withRoleCheck(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const supabase = createClient(req, res);
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      res.status(401).json({ error: `Unauthorized: ${error.message}` });
      return;
    }
    let role = data.user?.role;
    if (role === "admin") {
      // If the user is an admin, proceed with the original handler
      await handler(req, res);
    } else {
      res.status(403).json({ error: "Forbidden: You are not an admin" });
    }
  };
}
