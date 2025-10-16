import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const route = express.Router();

route.post("/send/:id", protectRoute, sendMessage);
route.get("/:id", protectRoute, getMessages);

export default route;
