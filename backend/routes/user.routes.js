import express from "express";
import { getUsersForSidebar } from "../controllers/user.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const route = express.Router();

route.get("/", protectRoute,getUsersForSidebar);

export default route;
