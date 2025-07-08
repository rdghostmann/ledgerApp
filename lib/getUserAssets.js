// lib/actions/getUserAssets.js
"use server";

import UserAsset from "@/models/UserAsset";
import { connectToDB } from "./connectDB";

export async function getUserAssets(userId) {
  try {
    await connectToDB();

    const assets = await UserAsset.find({ userId }).lean();
      console.log("💾 Assets fetched from server:", assets);


    return assets.map(asset => ({
      _id: String(asset._id),
      coin: asset.coin,
      balance: asset.amount,
    }));
  } catch (error) {
    console.error("Error in getUserAssets:", error);
    return [];
  }
}
