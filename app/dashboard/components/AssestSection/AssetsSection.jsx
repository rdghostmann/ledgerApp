// "use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

export default function AssetSection({ assets = [] }) {
  const coinColors = {
    BTC: "bg-yellow-500",
    ETH: "bg-gray-700",
    USDT: "bg-green-600",
    BNB: "bg-yellow-400",
    SOL: "bg-purple-600",
  };

  const SkeletonCard = () => (
    <Card className="bg-slate-800 text-white animate-pulse">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="h-4 w-16 bg-slate-600 rounded"></div>
          <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="h-6 w-24 bg-slate-700 rounded"></div>
        <div className="flex gap-2">
          <div className="h-8 w-20 bg-slate-700 rounded"></div>
          <div className="h-8 w-20 bg-slate-700 rounded"></div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {assets.length === 0 ? (
        <>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </>
      ) : (
        assets.map((asset) => (
          <Card
            key={asset._id}
            className="bg-slate-800 text-white hover:scale-[1.01] transition"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{asset.coin}</span>
                <span
                  className={`w-3 h-3 rounded-full ${coinColors[asset.coin] || "bg-slate-500"}`}
                ></span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold mb-2">
                ${Number(asset.balance).toFixed(4)}
              </p>
              <div className="flex gap-2">
                <Link href={`/dashboard/send/${asset.coin}`}>
                  <Button variant="outline" className="text-sm flex items-center gap-1">
                    <ArrowUpCircle size={16} />
                    Send
                  </Button>
                </Link>
                <Link href={`/dashboard/receive/${asset.coin}`}>
                  <Button variant="outline" className="text-sm flex items-center gap-1">
                    <ArrowDownCircle size={16} />
                    Receive
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
