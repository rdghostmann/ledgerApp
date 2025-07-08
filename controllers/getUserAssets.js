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

  const rawAssets = await UserAsset.find({ userId: user._id.toString() });

  const assets = rawAssets.map((asset) => ({
    _id: asset._id.toString(),
    userId: asset.userId.toString(),
    coin: asset.coin,
    amount: asset.amount,
    createdAt: asset.createdAt?.toISOString(),
    updatedAt: asset.updatedAt?.toISOString(),
  }));

  console.log("💾 User assets sanitized and fetched:", assets);
  return assets;
}
