"use client";
import React from "react";
import Link from "next/link";

export default function CardCarousel({ totalBalance = 10 }) {
  const formattedBalance = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(totalBalance);

  return (
    <div className="w-full px-4 sm:px-0 max-w-3xl mx-auto mb-6">
      <div className="bg-gradient-to-br from-blue-700 to-violet-700 rounded-2xl shadow-xl h-40 flex flex-col justify-between relative overflow-hidden">
        <div className="p-5">
          <h1 className="text-sm font-semibold text-white mb-1">
            <Link href="/dashboard/assets" className="hover:underline">
              Total Balance
            </Link>
          </h1>
<h2 className="text-2xl font-bold text-white">
  ${Number(totalUsd).toLocaleString(undefined, { minimumFractionDigits: 2 })}
</h2>
        </div>

        <span className="absolute top-3 right-4 bg-green-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow">
          verified
        </span>
      </div>
    </div>
  );
}
