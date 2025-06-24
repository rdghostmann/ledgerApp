"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // mock login
    if (email && password) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/bg-login.jpg')" }}>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <img src="/logo.png" alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-2 text-lg font-medium text-gray-700">Login to your Account</h2>
        </div>

        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded bg-blue-100 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded bg-blue-100 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember this account
            </div>
            <button type="submit" className="w-full py-2 bg-black text-white font-bold rounded hover:bg-gray-800">
              SIGN IN
            </button>
          </div>
          <div className="text-sm mt-4 flex justify-between text-blue-600">
            <a href="#">Forgot Password?</a>
            <a href="#">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
}
