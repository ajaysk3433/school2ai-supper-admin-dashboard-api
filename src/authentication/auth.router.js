import express from "express";
import { loginUserController } from "./login/login.controller.js";

const router = express.Router();

router.post("/login/", loginUserController);

export default router;
