const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = "yamini_secret_123"; // env me daalna better hai

// Dummy DB (array)
let users = [];

// 🔹 REGISTER
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: "User already exists ❌" });
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.json({ message: "Registered Successfully ✅" });
});

// 🔹 LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials ❌" });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login Success ✅", token, user });
});

// 🔹 PROTECTED ROUTE
app.get("/profile", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token ❌" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: "Profile data 🔥", user: decoded });
  } catch (err) {
    res.status(401).json({ message: "Invalid token ❌" });
  }
});

app.listen(PORT, () => console.log("Server running 🚀"));