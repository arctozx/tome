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
