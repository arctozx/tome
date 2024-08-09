import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000
const mongoDBURL = process.env.mongoDBURL

const app = express();
app.use(express.json());
app.use(cors())

app.get("/home", (req, res) => {
  console.log("This is home page");

  res.end();
});

app.get("/", (req, res) => {
  console.log("This is the landing page");
  res.send("Welcome to my heart");
  res.end();
});

app.use("/books", booksRoute)

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to Database");
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
