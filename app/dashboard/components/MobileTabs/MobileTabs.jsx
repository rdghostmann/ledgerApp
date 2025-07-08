
import Link from "next/link";
import React from "react";

const MobileTabs = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
      <div className="relative max-w-4xl mx-auto flex justify-between items-center px-4 py-2 text-xs text-gray-700">
        <Link href="/dashboard/card" className="flex flex-col items-center justify-center w-1/5">
          <img src="/icons/credit-card.png" alt="Card" className="w-6 h-6 mb-1" />
          <span>Card</span>
        </Link>

        <Link href="/dashboard/connect-wallet" className="flex flex-col items-center justify-center w-1/5">
          <img src="/icons/link.png" alt="Connect" className="w-6 h-6 mb-1" />
          <span>Connect</span>
        </Link>

        <Link
          href="/dashboard/"
          className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-white"
        >
          <img src="/icons/home.png" alt="Home" className="w-8 h-8" />
        </Link>

        <Link href="/dashboard/transactions" className="flex flex-col items-center justify-center w-1/5">
          <img src="/icons/transaction.png" alt="Transactions" className="w-6 h-6 mb-1" />
          <span>Transactions</span>
        </Link>

        <Link href="/dashboard/swap-coin" className="flex flex-col items-center justify-center w-1/5">
          <img src="/icons/swap.png" alt="Swap" className="w-6 h-6 mb-1" />
          <span>Swap</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileTabs;
