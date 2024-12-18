import { getProperties, getProperty } from "../controllers/property.controller.js";
import express from "express";


const propertyRouter = express.Router();

propertyRouter.get("/:id", getProperty);
propertyRouter.get("/", getProperties);

export default propertyRouter;
