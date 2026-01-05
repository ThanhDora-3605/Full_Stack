import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const loginData = {
  email: "td@gmail.com",
  password: "123456",
};

const handleLogin = (e, navigate, from) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  if (email === loginData.email && password === loginData.password) {
    localStorage.setItem("isAuthenticated", "true");
    const redirectPath = from && from !== "/login" ? from : "/";
    navigate(redirectPath, { replace: true });
  } else {
    alert("Email or password is incorrect");
  }
};

export default function Login() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("continue") || "/";
  const navigate = useNavigate();
  return (
    <div>
      <form onSubmit={(e) => handleLogin(e, navigate, from)}>
        <div className="max-w-sm mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
            Welcome Back
          </h2>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your email"
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
