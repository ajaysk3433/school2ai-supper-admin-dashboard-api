import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies?.token;
        // console.log(req.cookies.token);
        if (!token) {
            return res.status(401).json({
                isSuccess: false,
                message: "Authentication token missing",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            isSuccess: false,
            message: "Invalid or expired token",
        });
    }
};

// import jwt from "jsonwebtoken";
// import { ApiError } from "../utils/ApiError.js";

// export const authMiddleware = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (!authHeader || !authHeader.startsWith("Bearer ")) {
//         throw new ApiError(401, "Access token missing");
//     }

//     const token = authHeader.split(" ")[1];

//     try {
//         const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

//         req.user = decoded; // { id, role }
//         next();
//     } catch (error) {
//         throw new ApiError(401, "Invalid or expired token");
//     }
// };
