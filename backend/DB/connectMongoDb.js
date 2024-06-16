import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
  }
};
