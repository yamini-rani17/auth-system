import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:3000/api/auth/profile",
          {
            headers: {
              Authorization: token, // 🔥 important
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
        <div className="bg-pink shadow-xl p-6 rounded-3xl w-[400px] bg-purple-300 text-center">

          <h2 className="text-xl font-bold mb-4">
            Profile 👤
          </h2>

          <p className="text-gray-700">
            User ID:
          </p>

          <p className="font-semibold text-purple-600 hover:text-purple-800 transition duration-300">
            {user.id}
          </p>

        </div>
      )}

    </div>
  );
}

export default Profile;