import { connectToDB } from "@/lib/connectDB";
import User from "@/models/User";
import UserAsset from "@/models/UserAsset";

export default async function totalUserAssetBalance(userIdOrEmail) {
  await connectToDB();

  // Find user by _id or email
  let user;
  if (typeof userIdOrEmail === "string" && userIdOrEmail.includes("@")) {
    user = await User.findOne({ email: userIdOrEmail });
  } else {
    user = await User.findById(userIdOrEmail);
  }
  if (!user) return 0;

  // Get all assets for user
  const assets = await UserAsset.find({ userId: user._id });
  const total = assets.reduce((sum, asset) => sum + (asset.amount || 0), 0);

  // Optionally update the user's balance field
  user.balance = total;
  await user.save();

  return total;
}