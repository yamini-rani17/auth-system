const express = require("express");
const app = express();

const connectDB = require("./config/db");
const cors = require("cors");


// 🔥 CONNECT DATABASE
connectDB();

// middleware
app.use(express.json());
app.use(cors());


const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});