"use client";

import React, { useEffect, useState } from "react";
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
    <Card className="bg-white/5 backdrop-blur-md rounded-2xl animate-pulse border border-white/10 p-6">
      <div className="h-5 w-24 bg-blue-700/40 rounded mb-4"></div>
      <div className="h-6 w-36 bg-blue-800/40 rounded mb-2"></div>
      <div className="h-4 w-20 bg-blue-600/40 rounded"></div>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading || assets.length === 0 ? (
        Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
      ) : (
        <>
          {assets.map((asset) => {
            const coinName = asset.coin;
            const change = asset.change ?? 0;
            const isUp = change >= 0;
            const baseSlug = coinSlug[coinName];
            const icon = `/cryptocoin/${baseSlug}.png`;

            return (
              <Card
                key={asset._id}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-5 text-white rounded-2xl shadow-lg transition hover:shadow-xl hover:-translate-y-1"
              >
                <CardHeader className="flex items-center justify-between p-0 mb-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={icon}
                      alt={coinName}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `/cryptocoin/${baseSlug}.svg`;
                      }}
                      className="w-10 h-10 object-contain rounded-full border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">{coinName}</h4>
                      <p className="text-xs text-blue-300">
                        {asset.amount?.toFixed(4)} {coinName}
                      </p>
                    </div>
                  </div>
                  <div className={`text-sm font-semibold ${isUp ? "text-green-400" : "text-red-400"}`}>
                    {isUp ? "+" : ""}
                    {change.toFixed(2)}%
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-xl font-bold text-blue-100">
                    ≈ ${asset.usdValue?.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                </CardContent>
              </Card>
            );
          })}

                  </>
      )}
    </div>
  );
}
