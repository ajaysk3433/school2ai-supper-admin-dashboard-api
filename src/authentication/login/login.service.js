import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, findUserByMobile } from "../../model/user.model.js";
import { insertOtp, findOtp } from "../../model/otps.model.js";

export const loginUser = async (userCredential) => {
    // Validate all fields present
    for (const key in userCredential) {
        if (!userCredential[key]) {
            throw { status: 400, message: `Field "${key}" is required` };
        }
    }

    const { email, password } = userCredential;

    const user = await findUserByEmail(email);
    if (!user) {
        throw { status: 404, message: "User not found" };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw { status: 400, message: "Incorrect password" };
    }

    const token = jwt.sign(
        { mobile: user.mobile },
        process.env.JWT_SECRET || "secret key",
        { expiresIn: "1h" }
    );

    return { token };
};

export const sendOtp = async ({ mobile_no }) => {
    const result = await findUserByMobile(mobile_no);
    if (!result) {
        throw { status: 404, message: "User not found" };
    }
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    const value = [mobile_no, 123456, expiresAt];

    try {
        const otpExist = await findOtp([mobile_no]);
        if (otpExist) {
            console.log("same otp send again ", otpExist.otp);
            return;
        }
        const result = await insertOtp(value);
        console.log(result);
    } catch (error) {
        throw { status: 500, message: "Database error" };
    }

    console.log(expiresAt);
};
