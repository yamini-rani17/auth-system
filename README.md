# 🔐 Auth System (Full Stack Project)

A Full Stack Authentication System with **Login, Register & Profile** functionality.

---

## 🚀 Live Demo

### 🌐 Frontend:
https://auth-system-inky.vercel.app

### 🔗 Backend:
https://auth-system-qdyy.onrender.com

---

## 📌 Features

- ✅ User Registration
- ✅ User Login
- ✅ JWT Authentication
- ✅ Protected Profile Route
- ✅ Token-based Authorization
- ✅ Responsive UI

---

## 🛠️ Tech Stack

### Frontend:
- React (Vite)
- Axios
- Tailwind CSS

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- dotenv

---

## 📁 Folder Structure

auth-system/
│
├── backend/
│   ├── config/db.js
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│
├── frontend/
│   ├── src/components/
│   ├── src/App.jsx
│
└── README.md

---

## ⚙️ Installation (Run Locally)

### 🔹 Clone Repository

git clone https://github.com/yamini-rani17/auth-system.git  
cd auth-system  

---

### 🔹 Backend Setup

cd backend  
npm install  

Create `.env` file:

MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=3000  

Run backend:

npm start  

---

### 🔹 Frontend Setup

cd frontend  
npm install  
npm run dev  

---

## 🔐 API Endpoints

POST /api/register → Register User  
POST /api/login → Login User  
GET /api/profile → Get Profile (Protected)  

---

## 🔑 Authorization

Use token in headers:

Authorization: Bearer your_token_here  

---

## 🌍 Deployment

Frontend → Vercel  
Backend → Render  
Database → MongoDB Atlas  

---

## ❗ Common Errors

### 1. 502 Error
- MongoDB not connected
- Using localhost instead of Atlas

### 2. Cannot GET /
- Root route missing

### 3. Token Error
- Use Bearer token format

---

## 🙌 Author

Yamini Rani  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
