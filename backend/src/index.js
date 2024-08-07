import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
	path: "./env",
});

connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`Server started at http://localhost:${process.env.PORT}/`);
        });
    })
    .catch(() => {
        console.log("Error connecting to MongoDB");
    })
