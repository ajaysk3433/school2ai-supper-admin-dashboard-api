import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmail, insertUser } from "../../model/user.model.js";

const saltRounds = 10;
export const singupUser = async (newUser) => {
    for (let key in newUser) {
        if (!newUser[key]) {
            throw {
                status: 400,
                message: `Field "${key}" is required`,
            };
        }
    }

    const mobileExists = await findUserByEmail(newUser.email);

    if (mobileExists) {
        throw {
            status: 400,
            message:
                "Email number already exists. Kindly retry with different email",
        };
    }

    const hash = await bcrypt.hash(newUser.password, saltRounds);

    const values = [
        newUser.name,
        newUser.role_id,
        newUser.school_id,
        newUser.email,
        newUser.mobile_no,
        hash,
        newUser.description || null,
    ];

    const result = await insertUser(values);

    const token = jwt.sign({ mobile: newUser.mobile }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });

    return {
        insertId: result.insertId,
        token,
    };
};
