import { Router } from "express";
import DragoController from "../controllers/DragoController";

const dragoRouter = Router();
const dragoController = new DragoController();

dragoRouter.get("/", dragoController.getAllDragos);

export default dragoRouter;
