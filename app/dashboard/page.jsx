"use client";

import Link from "next/link";

const assets = [
  { name: "Bitcoin", value: "$105,200.00", change: "+1.54%", icon: "₿" },
  { name: "Stellar", value: "$0.25", change: "+7.45%", icon: "★" },
  { name: "Trump Coin", value: "$0.30", change: "+0.88%", icon: "🪙" },
  { name: "Solana", value: "$144.46", change: "+1.83%", icon: "◎" },
  { name: "Ripple", value: "$2.18", change: "+1.16%", icon: "💧" },
  { name: "Algorand", value: "$0.18", change: "+0.84%", icon: "🅐" },
  { name: "Cardano", value: "$0.58", change: "+1.84%", icon: "₳" },
  { name: "Ethereum", value: "$2,415.42", change: "+1.70%", icon: "Ξ" },
  { name: "Litecoin", value: "$84.33", change: "+1.34%", icon: "Ł" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <header className="bg-white rounded-lg shadow-md mb-6 p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold text-gray-700">Welcome!</h1>
            <p className="text-sm text-green-600 font-medium">verified</p>
            <p className="text-sm mt-1">Total Balance: <strong>$0.00</strong></p>
          </div>
          <img src="/card-bg.png" alt="Banner" className="w-full md:w-[400px] mt-4 md:mt-0" />
        </header>

        {/* Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
          {["Send", "Receive", "Buy", "Stake"].map(action => (
            <button key={action} className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 font-medium text-gray-700">
              {action}
            </button>
          ))}
        </div>

        {/* Assets */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Assets</h2>
          <ul>
            {assets.map((asset, i) => (
              <li key={i} className="flex justify-between items-center border-b py-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">{asset.icon}</span>
                  <span>{asset.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-black font-medium">{asset.value}</p>
                  <p className="text-green-600 text-xs">{asset.change}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
        <div className="relative max-w-4xl mx-auto flex justify-between items-center px-4 py-2 text-xs text-gray-700">

          {/* Card */}
          <Link href="/card" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">💳</span>
            <span>Card</span>
          </Link>

          {/* Connect Wallet */}
          <Link href="/wallet" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">🔗</span>
            <span>Connect</span>
          </Link>

          {/* Floating Home Button */}
          <Link href="/" className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-2xl">🏠</span>
          </Link>

          {/* Transactions */}
          <Link href="/transactions" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">📄</span>
            <span>Transactions</span>
          </Link>

          {/* Swap Coin */}
          <Link href="/swap-coin" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">🔁</span>
            <span>Swap</span>
          </Link>
        </div>
      </footer>

    </div>
  );
}
