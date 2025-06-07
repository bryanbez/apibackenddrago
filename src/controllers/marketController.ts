import { Request, Response } from "express";

export default class MarketDataController {
  getDSTMarketPrice = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await fetch(
        "https://api.geckoterminal.com/api/v2/networks/polygon_pos/pools/0x9ac431aa4a30f8881d01ea0ab648208aa5b842d2"
      );

      if (!response.ok) {
        const text = await response.text();
        console.error(`Failed with status ${response.status}`, text);
        res.status(response.status).send(text);
        return;
      }

      const data = await response.json();
      const marketData = data.data.attributes.base_token_price_usd;
      const sixhrchange = data.data.attributes.price_change_percentage.h6;
      res.status(200).json({ usd: marketData, h6: `${sixhrchange}%` });
    } catch (error) {
      console.error("Error fetching market price:", error);
      res.status(500).json({ message: "Error fetching market price", error });
    }
  };
}
