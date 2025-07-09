"use server"
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import UserAsset from "@/models/UserAsset"
import { connectToDB } from "@/lib/connectDB";
export default async function getUserAssets() {
  await connectToDB();
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return [];

  const User = (await import("@/models/User")).default;
  const user = await User.findOne({ email: session.user.email });
  if (!user) return [];

  const rawAssets = await UserAsset.find({ userId: user._id.toString() });

  // Fetch live prices
  const res = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
    params: {
      ids: "bitcoin,ethereum,tether,binancecoin,solana",
      vs_currencies: "usd",
    },
  });

  const prices = {
    BTC: res.data.bitcoin.usd,
    ETH: res.data.ethereum.usd,
    USDT: res.data.tether.usd,
    BNB: res.data.binancecoin.usd,
    SOL: res.data.solana.usd,
  };

  let totalUsd = 0;

  const assets = rawAssets.map((asset) => {
    const price = prices[asset.coin] || 0;
    const usdValue = asset.amount * price;
    totalUsd += usdValue;

    return {
      _id: asset._id.toString(),
      userId: asset.userId.toString(),
      coin: asset.coin,
      amount: asset.amount,
      usdValue,
      createdAt: asset.createdAt?.toISOString(),
      updatedAt: asset.updatedAt?.toISOString(),
    };
  });

  return {
    totalUsd,
    assets,
  };
}
