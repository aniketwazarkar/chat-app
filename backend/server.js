/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
const app = express();
import authRoutes from "./routes/auth.routes.js";

import connectToMongoDB from "../db/connecttoMongoDB.js";
//Using .env for PORT initialization
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); // to parse the incoming payload with JSON payloads (from req.body)

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`🚀 Server running on port ${PORT}`);
});
