const express = require("express");
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

connectDB(); // 🔥 important

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running");
});