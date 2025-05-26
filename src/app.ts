import express from "express";
import dragoRouter from "./routes/dragoRoutes";
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/dragos", dragoRouter);
app.use("/api/isworking", (req, res) => {
  res.status(200).json({ message: "Server is working!" });
});
// app.use('/api/users', userRouter);

export default app;
