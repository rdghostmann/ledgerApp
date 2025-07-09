"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState("account");
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

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAccountTypeChange = (value) =>
    setForm({ ...form, accountType: value });

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
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="bg-white p-6 md:p-10 rounded-xl shadow-xl w-full max-w-3xl">
        <div className="text-center mb-6">
          <img src="/sfp.png" alt="Logo" className="mx-auto h-12" />
          <h2 className="mt-2 text-xl md:text-2xl font-semibold text-gray-800">
            Create Your Secure Account
          </h2>
        </div>

        <Tabs value={step} className="w-full" onValueChange={setStep}>
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Step 1: Account Info */}
          <TabsContent value="account">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="accountType">Account Type</Label>
                <Select value={form.accountType} onValueChange={handleAccountTypeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <button
              onClick={() => setStep("profile")}
              className="mt-6 w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
            >
              Next: Profile Info
            </button>
          </TabsContent>

          {/* Step 2: Profile Info */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={form.zipCode}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep("account")}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep("security")}
                className="bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-gray-800 transition"
              >
                Next: Security
              </button>
            </div>
          </TabsContent>

          {/* Step 3: Security */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <button
                onClick={() => setStep("profile")}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Back
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
                className={`py-2 px-6 font-medium rounded-md transition ${
                  loading
                    ? "bg-gray-500 text-white"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
              >
                {loading ? "Registering..." : "Finish & Register"}
              </button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-sm mt-6 text-center text-blue-600">
          <a href="/login">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
}
