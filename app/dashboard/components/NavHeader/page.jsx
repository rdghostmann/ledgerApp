// app/dashboard/page.jsx
import React from "react";
import NavHeader from "@/components/NavHeader";
import { getCurrentUser } from "@/lib/getCurrentUser";

const DashboardPage = async () => {
  const user = await getCurrentUser(); // ✅ Server action
  const username = user?.username || "User";
   console.log("🐛 [DashboardPage] user:", user);
  console.log("🐛 [DashboardPage] username:", username);



  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <NavHeader username={username} /> {/* ✅ Pass only the username string */}
      
      <div className="p-4">
        <p>Dashboard content goes here...</p>
      </div>
    </main>
  );
};

export default DashboardPage;
