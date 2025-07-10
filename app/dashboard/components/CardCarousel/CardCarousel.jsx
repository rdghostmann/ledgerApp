"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export default function CardCarousel({
  totalUsd = 0,
  walletId = "0xABC123...DEF456",
}) {
  const formattedBalance = Number(totalUsd).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const shortWallet = walletId?.slice(0, 6) + "..." + walletId?.slice(-4);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 mb-8">
      <motion.div
        className="bg-gradient-to-br from-blue-800 via-violet-800 to-indigo-900 text-white rounded-2xl shadow-2xl p-5 sm:p-6 relative overflow-hidden border border-blue-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
      >
        {/* Verified Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 text-[11px] sm:text-sm bg-green-600 px-2.5 py-1 rounded-full shadow-sm">
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
        <div className="my-4 text-center sm:text-left">
          <p className="text-sm text-blue-200">Total Balance</p>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
            ${formattedBalance}
          </h3>
        </div>

        {/* CTA */}
        <div className="flex justify-center sm:justify-end mt-6">
          <Link
            href="/dashboard/transactions"
            className="text-xs sm:text-sm px-4 py-2 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-100 transition"
          >
            View Transactions
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
