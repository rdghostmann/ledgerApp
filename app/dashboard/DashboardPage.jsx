"use client";

import Link from "next/link";
import ActionButtons from "./components/ActionButtons/ActionButtons";
import CoinGeckoWidget from "./components/CoinGeckoWidget/CoinGeckoWidget";
import NavHeader from "./components/NavHeader/NavHeader";
import CardCarousel from "./components/CardCarousel/CardCarousel";



export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-6 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Nav Header  */}
        <NavHeader />

        {/* Header */}
        {/* <header className="bg-white rounded-lg shadow-md mb-6 p-4 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h1 className="text-lg font-semibold text-gray-700">Welcome!</h1>
            <p className="text-sm text-green-600 font-medium">verified</p>
            <p className="text-sm mt-1">Total Balance: <strong>$0.00</strong></p>
          </div>
          <img src="/card-bg.png" alt="Banner" className="w-full md:w-[400px] mt-4 md:mt-0" />
        </header> */}

        {/* Credit Card  */}
        <CardCarousel /> 

        {/* Assets  */}
        <ActionButtons />

        {/* Dashboard Assets */}
        {/* <DashboardAssets /> */}
        {/* <AssetServer /> */}
        <CoinGeckoWidget />
      </div>

      {/* Bottom Nav */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-50">
        <div className="relative max-w-4xl mx-auto flex justify-between items-center px-4 py-2 text-xs text-gray-700">

          {/* Card */}
          <Link href="/dashboard/card" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">💳</span>
            <span>Card</span>
          </Link>

          {/* Connect Wallet */}
          <Link href="/dashboard/connect-wallet" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">🔗</span>
            <span>Connect</span>
          </Link>

          {/* Floating Home Button */}
          <Link href="/dashboard/" className="absolute left-1/2 -top-6 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg border-4 border-white">
            <span className="text-2xl">🏠</span>
          </Link>

          {/* Transactions */}
          <Link href="/dashboard/transactions" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">📄</span>
            <span>Transactions</span>
          </Link>

          {/* Swap Coin */}
          <Link href="/dashboard/swap-coin" className="flex flex-col items-center justify-center w-1/5">
            <span className="text-lg">🔁</span>
            <span>Swap</span>
          </Link>
        </div>
      </footer>

    </div>
  );
}
