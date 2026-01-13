import express from "express";
import {
    loginUserController,
    sendOtpController,
    verifyOtpController,
} from "./login/login.controller.js";
import { signupUserController } from "./signup/signup.controller.js";

const router = express.Router();

router.post("/login", loginUserController);
router.post("/signup", signupUserController);
router.post("/login/mobile/send-otp", sendOtpController);
router.post("/login/mobile/verify-otp", verifyOtpController);

export default router;
