import { Request, Response } from "express";

export default class MarketDataController {
  getDSTMarketPrice = async (req: Request, res: Response): Promise<void> => {
    console.log("API KEY:", process.env.COINGECKO_API);
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/dragon-soul-token",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-cg-demo-api-key": process.env.COINGECKO_API || "",
          },
        }
      );

      if (!response.ok) {
        const text = await response.text();
        console.error(`Failed with status ${response.status}`, text);
        res.status(response.status).send(text);
        return;
      }

      const data = await response.json();
      const marketData = data.market_data.current_price.usd;
      res.status(200).json({ usd: marketData });
    } catch (error) {
      console.error("Error fetching market price:", error);
      res.status(500).json({ message: "Error fetching market price", error });
    }
  };
}
