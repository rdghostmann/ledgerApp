"use server";

import UserAsset from "@/models/UserAsset";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { connectToDB } from "@/lib/connectDB";

export default async function getUserAssets() {
  await connectToDB();
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return [];
  }

  const User = (await import("@/models/User")).default;
  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return [];
  }

  const assets = await UserAsset.find({ userId: user._id });
  return assets;
}