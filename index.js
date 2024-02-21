import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import appRoutes from "./routes/book.route.js";
const app = express();
dotenv.config();
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.log(error));

/* app routes */
app.use(appRoutes);

const PORT = 5000;
app.listen(process.env.PORT, () =>
  console.log(`app is running on port : ${PORT}`)
);
