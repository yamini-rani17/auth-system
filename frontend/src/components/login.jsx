import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );

      // ✅ token save
      localStorage.setItem("token", res.data.token);

      alert("Login Success 🔥");

    } catch (err) {
      console.log(err);
      alert("Login Failed ❌");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-10">

      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[350px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Login 🔐
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;