import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

import postRoutes from "./routes/posts.js";

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL = `mongodb+srv://rajan:RajanKashyap@atlascluster.2v0dett.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log("Connected with database")))
  .catch(() => console.log("Some problem encountered, cannot connect"));
