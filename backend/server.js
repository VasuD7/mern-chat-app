import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import { connectMongoDb } from "./DB/connectMongoDb.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use("/api/auth", authRoutes);

app.use("/api/messages", messageRoutes);

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectMongoDb();
  console.log(`Server is running on port ${PORT}`);
});
