"use client";

import { useState, useTransition } from "react";
import NavHeader from "../components/NavHeader/NavHeader";
import { toast, Toaster } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const coins = [
  { value: "btc", label: "Bitcoin" },
  { value: "eth", label: "Ethereum" },
  { value: "usdt", label: "USDT" },
  { value: "bnb", label: "BNB" },
  { value: "sol", label: "Solana" },
  { value: "ada", label: "Cardano" },
  { value: "xrp", label: "Ripple" },
  { value: "doge", label: "Dogecoin" },
  { value: "trx", label: "TRX" },
  { value: "dot", label: "Polkadot" },
  { value: "shib", label: "SHIB" },
];

export default function FourZeroOnePage({ contributeTo401k }) {
  const [contribution, setContribution] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(coins[0].value);
  const [pending, startTransition] = useTransition();

  function handleContribution(e) {
    e.preventDefault();
    startTransition(async () => {
      const result = await contributeTo401k({
        amount: Number(contribution),
        coin: selectedCoin,
      });

      if (result.success) {
        toast.success("Contribution successful!");
        setContribution("");
      } else {
        toast.error(result.error || "Contribution failed");
      }
    });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-4 pb-12">
      <Toaster richColors position="top-center" />
      <NavHeader />

      <div className="max-w-5xl mx-auto mt-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-4">401(k) Retirement Account</h1>
        <p className="text-slate-400 text-sm sm:text-base mb-8">
          Your 401(k) is a retirement savings plan sponsored by your employer. It lets you save and invest a portion of
          your paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from the account.
        </p>

        {/* Contribution Form */}
        <form onSubmit={handleContribution} className="mb-8 flex gap-4 items-end flex-wrap">
          <div>
            <Label htmlFor="coin" className="text-blue-300 mb-1 block">Select Coin</Label>
            <Select value={selectedCoin} onValueChange={setSelectedCoin} disabled={pending}>
              <SelectTrigger className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white w-40">
                <SelectValue placeholder="Select coin" />
              </SelectTrigger>
              <SelectContent>
                {coins.map(coin => (
                  <SelectItem key={coin.value} value={coin.value}>
                    {coin.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="contribution" className="text-blue-300 mb-1 block">Amount</Label>
            <Input
              id="contribution"
              type="number"
              min="0.0001"
              step="any"
              value={contribution}
              onChange={e => setContribution(e.target.value)}
              placeholder="Amount"
              className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white w-32"
              required
              disabled={pending}
            />
          </div>
          <Button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg shadow hover:from-blue-500 hover:to-blue-700 transition"
            disabled={pending}
          >
            {pending ? "Processing..." : "Contribute"}
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Account Summary Table */}
          <div className="bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">Statistics Summary</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-white">Current Balance</TableCell>
                  <TableCell className="text-slate-300">$24,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-white">Year-to-Date Contributions</TableCell>
                  <TableCell className="text-slate-300">$3,000.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-white">Employer Match</TableCell>
                  <TableCell className="text-slate-300">$1,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-white">Vesting</TableCell>
                  <TableCell className="text-slate-300">80%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-slate-800 rounded-xl p-5 shadow-sm border border-slate-700">
            <h2 className="text-lg font-semibold text-blue-300 mb-3">Recent Employees Activity</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-slate-300">Date</TableHead>
                  <TableHead className="text-slate-300">Activity</TableHead>
                  <TableHead className="text-slate-300">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>06/28/2025</TableCell>
                  <TableCell>Contribution</TableCell>
                  <TableCell className="text-green-400">+$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>06/14/2025</TableCell>
                  <TableCell>Employer Match</TableCell>
                  <TableCell className="text-green-400">+$125.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>05/31/2025</TableCell>
                  <TableCell>Contribution</TableCell>
                  <TableCell className="text-green-400">+$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>05/15/2025</TableCell>
                  <TableCell>Investment Gain</TableCell>
                  <TableCell className="text-green-400">+$320.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Investment Allocation */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Investment Allocation</h2>
          <div className="w-full bg-slate-700 rounded overflow-hidden h-6 flex">
            <div className="bg-blue-500 h-6" style={{ width: "50%" }} title="US Stocks" />
            <div className="bg-green-500 h-6" style={{ width: "30%" }} title="International Stocks" />
            <div className="bg-yellow-400 h-6" style={{ width: "15%" }} title="Bonds" />
            <div className="bg-gray-400 h-6" style={{ width: "5%" }} title="Cash" />
          </div>
          <div className="flex justify-between text-xs sm:text-sm text-slate-400 mt-2">
            <span>US Stocks (50%)</span>
            <span>International (30%)</span>
            <span>Bonds (15%)</span>
            <span>Cash (5%)</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-2 rounded-lg shadow hover:from-blue-500 hover:to-blue-700 transition">
            Make a Contribution
          </Button>
          <Button className="bg-gradient-to-r from-green-600 to-green-800 text-white px-5 py-2 rounded-lg shadow hover:from-green-500 hover:to-green-700 transition">
            Adjust Investments
          </Button>
          <Button className="bg-slate-700 text-slate-300 px-5 py-2 rounded-lg hover:bg-slate-600 transition">
            View Statements
          </Button>
        </div>
      </div>
    </div>
  );
}