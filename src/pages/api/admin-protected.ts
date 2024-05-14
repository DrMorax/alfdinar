// Your API route file
import { NextApiRequest, NextApiResponse } from "next";
import withRoleCheck from "./adminCheck";

export default withRoleCheck(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      try {
        res.status(200).json({ message: "Protected content for admins" });
      } catch (e) {
        res.status(500).json({ error: `There was an error: ${e}` });
      }
    } else {
      res.status(500).json({ error: `Wrong method` });
    }
  }
);
