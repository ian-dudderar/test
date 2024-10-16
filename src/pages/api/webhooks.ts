import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";
import ShopifyConnector from "@/utils/shopify-connector";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req: any, res: any) => {
  const shopify = ShopifyConnector.getInstance();
  shopify.setWebhooks();

  res.status(200).json({ total: 1 });
});

export default router.handler({
  onError: (err: any, req: any, res: any) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});
