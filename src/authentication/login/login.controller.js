import { loginUser, sendOtp } from "./login.service.js";

export const loginUserController = async (req, res) => {
    try {
        const userCredential = req.body;

        const { token } = await loginUser(userCredential);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000,
        });

        res.status(200).send("Login successfully");
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};

export const sendOtpController = async (req, res) => {
    try {
        await sendOtp(req.body);
        res.status(200).send("OTP send");
    } catch (error) {
        const status = error.status || 500;
        const message = error.message || "Something went wrong";
        res.status(status).send(message);
    }
};
