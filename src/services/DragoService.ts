import { DragoModel, DragoDocument } from "../models/Drago";

export default class DragoService {
  async fetchAllDragos(): Promise<DragoDocument[]> {
    try {
      const dragos = await DragoModel.find().exec();
      return dragos;
    } catch (error) {
      console.error("Error fetching dragos:", error);
      throw new Error("Failed to fetch dragos");
    }
  }
}
