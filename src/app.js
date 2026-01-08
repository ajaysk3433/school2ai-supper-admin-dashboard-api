import express from "express";
import authRouter from "./authentication/auth.router.js";
import schoolRouter from "./school/school.router.js";
import helmet from "helmet";
const app = express();
app.use(express.json({ limit: "10kb" }));
app.use(helmet());

app.use("/auth", authRouter);
app.use("/school", schoolRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on PORT ", PORT);
});
