import express from "express";
import {
    loginUserController,
    sendOtpController,
} from "./login/login.controller.js";
import { signupUserController } from "./signup/signup.controller.js";

const router = express.Router();

router.post("/login", loginUserController);
router.post("/signup", signupUserController);
router.post("/login/mobile/send-otp", sendOtpController);

export default router;
