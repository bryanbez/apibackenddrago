import { Router } from "express";
import MarketDataController from "../controllers/marketController";

const marketRouter = Router();
const marketController = new MarketDataController();

marketRouter.get("/price/dst", marketController.getDSTMarketPrice);

export default marketRouter;
