"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup with:", email, password);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
    // Yahan actual Google Auth logic ayega
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 border-1 py-2 px-4 rounded hover:bg-red-400 mb-4"
        >
          <Image src="/google-icon.png" alt="Google" width={50} height={50} className="w-5 h-5" />
          Sign up with Google
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
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Sign Up
        </button>

        <Link href="/login" className="text-sm text-blue-600 mt-3 block text-center">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}
