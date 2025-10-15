import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs";

import authRouters from "./routes/auth.routes.js";
import connectToMongoose from "./db/connectToMongoose.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

// routes
app.use("/api/auth", authRouters);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectToMongoose();
});
