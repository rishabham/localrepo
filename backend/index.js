import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";

dotenv.config({});

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
    connectDB;
    console.log(`server listening at port ${PORT}`);
});
