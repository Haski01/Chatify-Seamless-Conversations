import express from "express";
import dotenv from "dotenv";

import authRouters from "./routes/auth.routes.js";
import connectToMongoose from "./db/connectToMongoose.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Testing home route..");
});

app.use("/api/auth", authRouters);

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectToMongoose();
});
