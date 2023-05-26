import { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const products = await getProducts();
      res.status(200).json({ data: products, error: false });
    } catch (error) {
      res.status(500).json({ data: [], error: true });
    }
  }
}
