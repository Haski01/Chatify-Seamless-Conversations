import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoose from "./db/connectToMongoose.js";

import authRouters from "./routes/auth.routes.js";
import messageRouters from "./routes/message.routes.js";
import userRouters from "./routes/user.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

// routes
app.use("/api/auth", authRouters);
app.use("/api/messages", messageRouters);
app.use("/api/users", userRouters);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectToMongoose();
});
