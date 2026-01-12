import express from "express";
import { loginUserController } from "./login/login.controller.js";
import { signupUserController } from "./signup/signup.controller.js";

const router = express.Router();

router.post("/login", loginUserController);
router.post("/signup", signupUserController);

export default router;
