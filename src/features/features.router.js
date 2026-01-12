import express from "express";
const router = express.Router();
import { createFeatureController } from "./features.controller.js";

router.post("/create", createFeatureController);

export default router;
