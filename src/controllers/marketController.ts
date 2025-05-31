import { Request, Response } from "express";

export default class MarketDataController {
  getDSTMarketPrice = async (req: Request, res: Response): Promise<void> => {
    const COINGECKO_API_URL =
      "https://api.coingecko.com/api/v3/coins/dragon-soul-token";

    try {
      const response = await fetch(`${COINGECKO_API_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-cg-demo-api-key": `${process.env.COINGECKO_API}`,
        },
      });

      const data = await response.json();
      res.status(200).json(data.market_data.current_price.usd);
    } catch (error) {
      console.error("Error fetching market price:", error);
      res.status(500).json({ message: "Error fetching market price" });
    }
  };
}
