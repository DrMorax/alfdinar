// import { NextApiRequest, NextApiResponse } from "next";
// import createClient from "@/app/utils/supabase/api";

// export default async function handleSignout(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const supabase = createClient(req, res);
//   const { error } = await supabase.auth.signOut();
//   if (error) {
//     console.error(error);
//     return res.status(500).json({ error: error.message });
//   }

//   res.status(200).json({ success: true });
// }
