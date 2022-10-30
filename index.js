

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/auth.js";
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

const app = express();

// db connection
const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    return res.json({
      data: "hello world from kaloraat auth API",
    });
  });
// middlewares
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// route middlewares
app.use("/api", authRoutes);

app.listen(8000, () => console.log("Server running on port 8000"));
