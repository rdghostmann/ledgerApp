import Link from "next/link";
import { BadgeCheck } from "lucide-react";

// Server Action: Calculate total user asset balance and update user balance
import { connectToDB } from "@/lib/connectDB";
import User from "@/models/User";
import UserAsset from "@/models/UserAsset";
import BalanceDisplay from "./BalanceDisplay";

async function totalUserAssetBalance(userIdOrEmail) {
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

export default async function CardCarousel({ userIdOrEmail, walletId = "0xABC123...DEF456" }) {
  // Get total balance from server action
  const totalUsd = await totalUserAssetBalance(userIdOrEmail);

  const formattedBalance = Number(totalUsd).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const shortWallet = walletId?.slice(0, 6) + "..." + walletId?.slice(-4);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <div className="bg-gradient-to-br from-blue-800 via-violet-800 to-indigo-900 text-white rounded-2xl shadow-2xl p-5 sm:p-6 relative overflow-hidden border border-blue-600">
        {/* Verified Badge */}
        <div className="cursor-pointer absolute top-3 right-3 flex items-center gap-1 text-[11px] sm:text-sm bg-green-600 px-2.5 py-1 rounded-full shadow-sm">
          <BadgeCheck size={14} className="text-white" />
          Verified
        </div>

        {/* Header Section */}
        <div className="mb-4">
          <p className="text-xs sm:text-sm text-blue-300 mt-1">
            Wallet: {shortWallet}
          </p>
        </div>

        {/* Balance Display */}
        <BalanceDisplay formattedBalance={formattedBalance} />


        {/* CTA */}
        <div className="flex justify-center sm:justify-end mt-6">
          <Link
            href="/dashboard/transactions"
            className="text-xs sm:text-sm px-4 py-2 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition"
          >
            View Transactions
          </Link>
        </div>
      </div>
    </div>
  );
}