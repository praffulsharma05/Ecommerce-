 

import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (response.data.success) {
        setToken(response.data.token);
        toast.success("Login successful");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl px-8 py-10 w-full max-w-md shadow-[10px_10px_30px_rgba(0,0,0,0.2)] transform hover:scale-[1.02] transition duration-300 ease-in-out">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 drop-shadow-lg">
          Admin Panel
        </h1>
        <form onSubmit={onsubmitHandler}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-[0_0_15px_#3b82f6] transition duration-200"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-inner focus:ring-2 focus:ring-blue-500 focus:outline-none focus:shadow-[0_0_15px_#3b82f6] transition duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full shadow-[4px_4px_12px_rgba(0,0,0,0.2)] transform hover:scale-105 transition duration-300 ease-in-out"
          >
            🚀 Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
