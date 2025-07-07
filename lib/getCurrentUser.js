// lib/getCurrentUser.js
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  console.log("📦 Session returned:", session);
  return session?.user || null;
}
