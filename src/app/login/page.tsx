"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Yahan actual Google Auth logic ayega
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border-1 py-2 px-4 rounded hover:bg-red-400 mb-4"
        >
          <Image src="/google-icon.png" alt="Google" width={50} height={50} className="w-5 h-5" />
          Continue with Google
        </button>

        <div className="border-t border-gray-300 my-4" />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Login
        </button>

        <Link href="/signup" className="text-sm text-blue-600 mt-3 block text-center">
          Don’t have an account? Sign Up
        </Link>
      </form>
    </div>
  );
}
