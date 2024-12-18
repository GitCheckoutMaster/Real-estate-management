import express from "express";
import userRouter from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import propertyRouter from "./routes/property.route.js";

const app = express();

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use("api/v1/property", propertyRouter);

export default app;
