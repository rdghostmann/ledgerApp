"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowLeftRight, X } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import NavHeader from "../components/NavHeader/NavHeader";

const coins = [
  { value: "btc", label: "Bitcoin" },
  { value: "xlm", label: "Stellar Lumen" },
  { value: "xrp", label: "Ripple" },
  { value: "trump", label: "Trump Coin" },
  { value: "sol", label: "Solana" },
  { value: "algo", label: "Algorand" },
  { value: "ada", label: "Cardano" },
  { value: "eth", label: "Ethereum" },
  { value: "ltc", label: "Litecoin" },
  { value: "trx", label: "Tron" },
  { value: "doge", label: "Doge" },
  { value: "usdt", label: "USDT" },
  { value: "shiba", label: "SHIBA" },
  { value: "bnb", label: "BNB" },
];

export default function Page() {
  const [swapFrom, setSwapFrom] = useState("");
  const [swapTo, setSwapTo] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-6xl mx-auto px-4">

      <NavHeader />
      <div className="flex flex-col items-center h-screen bg-gradient-to-br from-blue-50 to-violet-100 pt-10 pb-8">
        {/* <h1 className="text-2xl font-bold mb-4">Stake Page</h1> */}
        {/* <p className="text-lg mb-8">Swap your coins securely and instantly.</p> */}
        <Card className="w-full max-w-lg shadow-xl rounded-2xl">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Swap Coins
                </span>
              </CardTitle>
              {/* <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:bg-red-50"
                aria-label="Close"
              >
                <X />
              </Button> */}
            </div>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onSubmit={e => {
                e.preventDefault();
                // handle swap logic here
              }}
            >
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label htmlFor="swapfrom" className="mb-1 block">
                    Swap from
                  </Label>
                  <Select
                    value={swapFrom}
                    onValueChange={setSwapFrom}
                    required
                  >
                    <SelectTrigger className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3">
                      <SelectValue placeholder="Select coin" />
                    </SelectTrigger>
                    <SelectContent>
                      {coins.map((coin) => (
                        <SelectItem key={coin.value} value={coin.value}>
                          {coin.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end pb-4">
                  <span className="rounded-full bg-gradient-to-r from-blue-500 to-violet-600 p-2 text-white shadow">
                    <ArrowLeftRight className="w-5 h-5" />
                  </span>
                </div>
                <div className="flex-1">
                  <Label htmlFor="swapto" className="mb-1 block">
                    Swap to
                  </Label>
                  <Select
                    value={swapTo}
                    onValueChange={setSwapTo}
                    required
                  >
                    <SelectTrigger className="w-full rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-2 px-3">
                      <SelectValue placeholder="Select coin" />
                    </SelectTrigger>
                    <SelectContent>
                      {coins.map((coin) => (
                        <SelectItem key={coin.value} value={coin.value}>
                          {coin.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label htmlFor="swapamount" className="mb-1 block">
                  Amount
                </Label>
                <div className="relative">
                  <Input
                    id="swapamount"
                    name="swapamount"
                    type="number"
                    min="0"
                    step="any"
                    placeholder="150.00"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="pr-24"
                    required
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    (Currency: USD)
                  </span>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-2 rounded-lg shadow hover:from-red-600 hover:to-pink-600 transition"
              >
                Swap Coin
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}