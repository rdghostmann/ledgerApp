"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    zipCode: "",
    accountType: "personal",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Registration successful! Redirecting...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (err) {
      toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: `radial-gradient(circle at top left, #1e3a8a, #000000)`,
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl">
        <div className="text-center mb-6">
          <img src="/sfp.png" alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-2 text-xl font-semibold text-gray-800">
            Create Your Account
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              ["username", "Username"],
              ["phone", "Phone"],
              ["firstName", "First Name"],
              ["lastName", "Last Name"],
              ["email", "Email"],
              ["country", "Country"],
              ["state", "State"],
              ["zipCode", "Zip Code"],
            ].map(([name, placeholder]) => (
              <input
                key={name}
                type={name === "email" ? "email" : "text"}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                className="input"
                required={["username", "email", "phone"].includes(name)}
              />
            ))}

            <select
              name="accountType"
              value={form.accountType}
              onChange={handleChange}
              className="input"
              required
            >
              <option value="personal">Personal</option>
              <option value="business">Business</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="input"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 text-white font-semibold rounded-md transition ${
              loading ? "bg-gray-600" : "bg-black hover:bg-gray-800"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Registering...
              </div>
            ) : (
              "REGISTER"
            )}
          </button>

          <div className="text-sm mt-4 text-center text-blue-600">
            <a href="/login">Already have an account? Login</a>
          </div>
        </form>
      </div>

      {/* Input styles */}
      <style jsx>{`
        .input {
          @apply w-full px-4 py-2 border rounded bg-blue-100 focus:outline-none;
        }
      `}</style>
    </div>
  );
}
