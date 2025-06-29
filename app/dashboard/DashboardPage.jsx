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
    

    </div>
  );
}
