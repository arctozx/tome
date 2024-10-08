import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 4000;
const mongoDBURL = process.env.mongoDBURL;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/home", (req, res) => {
  console.log("This is home page");

app.use(express.static(path.join(__dirname, "..", "/frontend/dist")));

app.get("/api", (req, res) => {
  console.log("This is the landing page");
  res.send("Welcome to my heart");
  res.end();
});

app.use("/api/books", booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server is running at test ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
