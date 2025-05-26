import { Request, Response } from "express";
import DragoService from "../services/DragoService";

export default class DragoController {
  private dragoService = new DragoService();

  getAllDragos = async (req: Request, res: Response): Promise<void> => {
    try {
      const dragos = await this.dragoService.fetchAllDragos();
      res.status(200).json(dragos);
    } catch (error) {
      console.error("Error fetching dragos:", error);
      res.status(500).json({ message: "Failed to fetch dragos" });
    }
  };
}
