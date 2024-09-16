"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 pl-10 text-sm text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 pl-10 text-sm text-gray-700 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-blue-500"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white text-sm font-bold rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <Link href="/register">
              <span className="text-blue-500 hover:underline">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
