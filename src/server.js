import dotenv from "dotenv";
dotenv.config(); // Budotenv ni ishlatish uchun yetarli
import fs from "fs";
import path from "path";
import express from "express";
import userRouter from "./router/users.js";
import fileUpload from "express-fileupload";    

const app = express();

app.use(express.json());
app.use(fileUpload());
app.use("/users", userRouter); // Agar userRouter ni ulash kerak bo'lsa, quyidagicha yozasiz:
// Agar userRouter ni ulash kerak bo'lsa, quyidagicha yozasiz:
// app.use("/api", userRouter);

const PORT = process.env.PORT || 2323;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});