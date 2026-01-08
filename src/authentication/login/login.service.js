import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByMobile } from "./user.model.js";

export const loginUser = async (userCredential) => {
    // Validate all fields present
    for (const key in userCredential) {
        if (!userCredential[key]) {
            throw { status: 400, message: `Field "${key}" is required` };
        }
    }

    const { mobile, password } = userCredential;

    const user = await findUserByMobile(mobile);
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
