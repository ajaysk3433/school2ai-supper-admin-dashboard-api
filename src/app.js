import express from "express";
import authRouter from "./authentication/auth.router.js";
import schoolRouter from "./school/school.router.js";
import helmet from "helmet";
import rolesRouter from "./role/roles.router.js";
import featuresRouter from "./features/features.router.js";
import cors from "cors";
import { authMiddleware } from "./middleware/auth.middleware.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(helmet());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    }),
);

app.use("/auth", authRouter);
app.use("/school", authMiddleware, schoolRouter);
app.use("/roles", authMiddleware, rolesRouter);
app.use("/features", authMiddleware, featuresRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on PORT ", PORT);
});
