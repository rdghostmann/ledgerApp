"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Plus } from "lucide-react";

export default function AssetSection({ userAssets }) {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  const coinSlug = {
    BTC: "bitcoin",
    ETH: "ethereum",
    USDT: "tether",
    BNB: "binance-coin",
    SOL: "solana",
  };

  const fetchCoinPrices = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await res.json();
    return {
      BTC: { price: data.bitcoin.usd, change: data.bitcoin.usd_24h_change },
      ETH: { price: data.ethereum.usd, change: data.ethereum.usd_24h_change },
      USDT: { price: data.tether.usd, change: data.tether.usd_24h_change },
      BNB: { price: data.binancecoin.usd, change: data.binancecoin.usd_24h_change },
      SOL: { price: data.solana.usd, change: data.solana.usd_24h_change },
    };
  };

  useEffect(() => {
    async function fetchAssets() {
      setLoading(true);
      try {
        const priceMap = await fetchCoinPrices();

        const enriched = userAssets.map((asset) => {
          const { price, change } = priceMap[asset.coin] || {};
          const usdValue = (asset.amount ?? 0) * price;
          return { ...asset, price, change, usdValue };
        });

        setAssets(enriched);
      } catch (err) {
        console.error("Error fetching assets", err);
        setAssets([]);
      } finally {
        setLoading(false);
      }
    }

    fetchAssets();
  }, [userAssets]);

  const SkeletonCard = () => (
    <Card className="bg-black text-white animate-pulse rounded-2xl shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="h-4 w-16 bg-blue-700 rounded"></div>
          <div className="w-3 h-3 bg-blue-700 rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-6 w-24 bg-blue-800 rounded"></div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-blue-800 rounded"></div>
          <div className="h-8 w-20 bg-blue-800 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {loading || assets.length === 0 ? (
        Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
      ) : (
        <>
          {assets.map((asset) => {
            const coinName = asset.coin;
            const change = asset.change ?? 0;
            const isUp = change >= 0;
            const baseSlug = coinSlug[coinName];
            const initialIcon = `/cryptocoin/${baseSlug}.png`;

            return (
              <Card
                key={asset._id}
                className="bg-gradient-to-br from-black to-blue-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-base font-semibold">
                    <div className="flex items-center gap-3">
                      <img
                        src={initialIcon}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `/cryptocoin/${baseSlug}.svg`;
                        }}
                        alt={coinName}
                        className="w-8 h-8 object-contain rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{coinName}</span>
                        <span className="text-xs text-blue-300">
                          {asset.amount?.toFixed(4)} {coinName}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`text-sm ${isUp ? "text-green-400" : "text-red-400"}`}
                    >
                      {isUp ? "+" : ""}
                      {change.toFixed(2)}%
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-semibold mb-1 text-blue-100">
                    ≈ $
                    {asset.usdValue?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </CardContent>
              </Card>
            );
          })}

          {/* Add New Asset Card */}
          <Card
            className="bg-blue-800 text-white rounded-2xl border-2 border-dashed border-blue-500 hover:border-blue-300 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition"
            onClick={() => alert("Open modal or navigate to add asset page")}
          >
            <div className="text-center p-6 flex flex-col items-center">
              <Plus size={32} className="mb-2" />
              <p className="text-sm font-medium">Add Asset</p>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}
