"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

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

  const handleAccountTypeChange = (value) => {
    setForm({ ...form, accountType: value });
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
            <div>
              <Label className="mb-1" htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="country">Country</Label>
              <Input
                id="country"
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="state">State</Label>
              <Input
                id="state"
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="Zip Code"
                value={form.zipCode}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <Label className="mb-1" htmlFor="accountType">Account Type</Label>
              <Select value={form.accountType} onValueChange={handleAccountTypeChange} required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-1" htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label className="mb-1" htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
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
    </div>
  );
}