import mongoose from "mongoose";

require("dotenv").config();

export const connectToMongoDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables");
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`Connected to MongoDB successfully: ${conn.connection.name}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
