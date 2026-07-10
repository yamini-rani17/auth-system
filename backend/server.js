const express = require("express");
import connectDB from "./config/db.js";

const app = express();

connectDB(); // 🔥 important

app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

app.listen(3000, () => {
  console.log("Server running");
});