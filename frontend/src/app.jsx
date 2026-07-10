import { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // REGISTER
  const API_URL = "https://auth-backend.onrender.com";

const handleRegister = async () => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  alert(data.message);
  setIsLogin(true);
};

  // LOGIN
  const handleLogin = async () => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (res.ok) {
    setUser(data.user);
  } else {
    alert(data.message);
  }
};

  // LOGOUT
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 gap-6 p-4">

      {/* FORM */}
      {!user && (
        <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-4">
            {isLogin ? "Login" : "Register"}
          </h2>

          {/* Name (only for register) */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full mb-3 p-2 border rounded"
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
            onChange={handleChange}
          />

          <button
            onClick={isLogin ? handleLogin : handleRegister}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          >
            {isLogin ? "Login" : "Register"}
          </button>

          <p className="text-center mt-3 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer ml-1"
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      )}

      {/* PROFILE */}
      {user && (
        <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm text-center">
          <h2 className="text-xl font-bold mb-4">Profile</h2>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>

          <button
            onClick={handleLogout}
            className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;