'use server';

import User from "@/models/User";
import UserAsset from "@/models/UserAsset";
import _401kContribution from "@/models/401kContribution";
import { connectToDB } from "@/lib/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export async function contributeTo401k({ amount, coin }) { 
  await connectToDB();
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return { success: false, error: "Unauthorized" };
  }

  if (!amount || amount <= 0 || !coin) {
    return { success: false, error: "Invalid data" };
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return { success: false, error: "User not found" };
  }

  const asset = await UserAsset.findOne({ userId: user._id, coin: coin.toUpperCase() });
  if (!asset || asset.amount < amount) {
    return { success: false, error: "Insufficient asset balance" };
  }

  asset.amount -= amount;
  await asset.save();

  user._401kBalance = (user._401kBalance || 0) + amount;
  await user.save();

  await _401kContribution.create({
    userId: user._id,
    amount,
    coin: coin.toUpperCase(),
    status: "confirmed",
    source: coin.toUpperCase(),
  });

  return {
    success: true,
    newAssetBalance: asset.amount,
    new401kBalance: user._401kBalance,
  };
}
