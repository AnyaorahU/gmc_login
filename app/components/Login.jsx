"use client";

import { useState } from "react";
import { FaGithub, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validate();
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      console.log("Login Data", formData);
      alert("Login successful");
    }
  };

  return (
    <div>
      <header className="bg-blue-50 py-6">
        <nav className="w-full p-5 mb-15 flex justify-between">
          {/* logo  */}
          <img src="/gomycodeLogo.svg" alt="logo" />

          <button className="px-6 py-3 border rounded-full">
            👋 We are here to help
          </button>
        </nav>
        <div className="w-full ">
          <div className="w-100 mx-auto text-center space-y-8 ">
            <h3 className="text-2xl font-semibold">Sign in to your account.</h3>
            <p className="text-neutral-600">
              Sign in to your GoMyCode Learn account to continue your learning
              experience.
            </p>
          </div>
        </div>
      </header>

      <div className="py-30">
        <form
          onSubmit={handleSubmit}
          className="w-100 mx-auto space-y-4 text-sm text-neutral-600"
        >
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border rounded-md p-4 border-neutral-400"
            />
            {error.email && <p>{error.email}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-md p-4 border-neutral-400"
            />
            {error.password && <p>{error.password}</p>}
          </div>

          <div className="flex justify-between py-4">
            <div className="flex justify-between gap-2 items-center">
              <input type="checkbox" /> <p>Remember me</p>
            </div>

            <a href="" className="text-blue-800">
              Forget Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-md text-center bg-blue-500 text-white"
          >
            Sign in
          </button>
        </form>

        <div className="w-100 mx-auto flex text-sm py-4 items-center gap-2 text-neutral-500">
          <hr className="flex-1" />
          <p>Or sign in with</p>
          <hr className="flex-1" />
        </div>
        <div className="w-100 mx-auto flex gap-6">
          <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
            <FcGoogle className="text-3xl" />
          </button>
          <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
            <FaGithub className="text-3xl" />
          </button>
          <button className="flex border border-neutral-300 w-30 h-10 rounded-md justify-center items-center">
            <FaMicrosoft className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
}
