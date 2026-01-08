import express from "express";
import { loginController } from "./login/login.controller.js";

const router = express.Router();

router.post("/login", loginController);

export default router;
