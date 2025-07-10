"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const coinSlugMap = {
  BTC: "bitcoin",
  ETH: "ethereum",
  USDT: "tether",
  BNB: "binancecoin",
  SOL: "solana",
  ADA: "cardano",
  XRP: "ripple",
  DOGE: "dogecoin",
  TRX: "tron",
  DOT: "polkadot",
  SHIB: "shiba-inu",
};

export default function AssetSection() {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAssetsAndPrices() {
      setLoading(true);
      try {
        // 1. Fetch user assets from your API route
        const assetsRes = await fetch("/api/user-assets");
        const assetsData = await assetsRes.json();
        const userAssets = assetsData.assets || [];

        // 2. Get all unique coins to fetch prices for
        const coins = [...new Set(userAssets.map(a => a.coin))];
        const ids = coins.map(c => coinSlugMap[c]).filter(Boolean).join(",");

        // 3. Fetch live prices from CoinGecko
        const priceRes = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        const priceData = await priceRes.json();

        // 4. Merge price info into assets
        const enriched = userAssets.map(asset => {
          const slug = coinSlugMap[asset.coin];
          const price = priceData[slug]?.usd ?? 0;
          const usdValue = (asset.amount ?? 0) * price;
          return { ...asset, price, usdValue };
        });

        setAssets(enriched);
      } catch (error) {
        setAssets([]);
      } finally {
        setLoading(false);
      }
    }

    fetchAssetsAndPrices();
  }, []);

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
        assets.map((asset) => {
          const coin = asset.coin;
          const network = asset.network || "Mainnet";
          const baseSlug = coinSlugMap[coin];

          return (
            <Card
              key={asset._id}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-5 text-white rounded-2xl shadow-lg transition hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="flex items-center justify-between p-0 mb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={`/cryptocoin/${baseSlug}.svg`}
                    alt={coin}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = `/cryptocoin/${baseSlug}.png`;
                    }}
                    className="w-10 h-10 object-contain rounded-full border border-white/10"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">
                      {coin}{" "}
                      <span className="text-[10px] text-blue-300">
                        ({network})
                      </span>
                    </h4>
                    <p className="text-xs text-blue-300">
                      {asset.amount?.toFixed(4)} {coin}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-xs text-blue-300 mb-1">
                  1 {coin} = ${asset.price?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
                <p className="text-xl font-bold text-blue-100">
                  ≈ ${asset.usdValue?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
}