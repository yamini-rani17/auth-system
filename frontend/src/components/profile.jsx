import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "https://auth-backend.onrender.com/profile", // ✅ FIXED
          {
            headers: {
              Authorization: `Bearer ${token}`, // ✅ FIXED
            },
          }
        );

        setUser(res.data.user);

      } catch (err) {
        console.log(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-20 py-22">

      {user && (
        <div className="shadow-xl p-6 rounded-3xl w-[400px] bg-purple-300 text-center">

          <h2 className="text-xl font-bold mb-4">
            Profile 👤
          </h2>

          <p className="text-gray-700">
            Email:
          </p>

          <p className="font-semibold text-purple-600">
            {user.email}
          </p>

        </div>
      )}

    </div>
  );
}

export default Profile;