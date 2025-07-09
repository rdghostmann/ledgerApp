"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function CardCarousel({
  totalUsd = 0,
  username = "Anonymous",
  walletId = "0xABC123...DEF456",
  tier = "Tier 1",
}) {
  const formattedBalance = Number(totalUsd).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const shortWallet = walletId?.slice(0, 6) + "..." + walletId?.slice(-4);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <motion.div
        className="bg-gradient-to-br from-blue-800 via-violet-800 to-indigo-900 text-white rounded-2xl shadow-2xl p-6 sm:p-8 relative overflow-hidden border border-blue-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Verified badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2 text-sm bg-green-600 px-3 py-1 rounded-full shadow-sm">
          <BadgeCheck size={16} className="text-white" />
          Verified
        </div>

        {/* Username & Wallet */}
        <div className="mb-4">
          <p className="text-sm opacity-80">Welcome back,</p>
          <h2 className="text-xl font-bold">{username}</h2>
          <p className="text-sm text-blue-200 mt-1">Wallet: {shortWallet}</p>
        </div>

        {/* Balance */}
        <div className="my-4">
          <p className="text-sm opacity-80">Total Balance</p>
          <h3 className="text-3xl font-extrabold tracking-wide">
            ${formattedBalance}
          </h3>
        </div>

        {/* Tier & CTA */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-sm bg-white/10 px-3 py-1 rounded-lg shadow text-blue-100">
            {tier}
          </span>
          <Link
            href="/dashboard/transactions"
            className="text-sm px-4 py-2 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition"
          >
            View Transactions
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
