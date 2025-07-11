import connectToDB from "@/lib/connectToDB";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import User from "@/models/User";
import UserAsset from "@/models/UserAsset";
import _401kContribution from "@/models/401kContribution";

export async function POST(req) {
  await connectToDB();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { amount, coin } = await req.json();
  if (!amount || amount <= 0 || !coin) return Response.json({ error: "Invalid data" }, { status: 400 });

  const user = await User.findOne({ email: session.user.email });
  if (!user) return Response.json({ error: "User not found" }, { status: 404 });

  // Find user's asset for the selected coin
  const asset = await UserAsset.findOne({ userId: user._id, coin: coin.toUpperCase() });
  if (!asset || asset.amount < amount) return Response.json({ error: "Insufficient asset balance" }, { status: 400 });

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

  return Response.json({ success: true, newAssetBalance: asset.amount, new401kBalance: user._401kBalance });
}