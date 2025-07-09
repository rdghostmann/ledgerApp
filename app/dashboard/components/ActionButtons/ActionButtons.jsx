"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownToLine, Coins, Send, WalletCards, PiggyBank, Briefcase } from "lucide-react"; // Import the 401k icon
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const actions = [
    { label: "Send", modal: "send", icon: <Send className="text-blue-600 text-lg" /> },
    { label: "Receive", modal: "receive", icon: <ArrowDownToLine className="text-green-600 text-lg" /> },
    { label: "Buy", modal: null, icon: <WalletCards className="text-yellow-600 text-lg" /> },
    { label: "Savings", modal: null, icon: <Briefcase className="text-orange-600 text-lg" /> }, // 401k section
    { label: "Stake", modal: "stake", icon: <Coins className="text-purple-600 text-lg" /> },
];

const cryptoOptions = [
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
    { value: "usdt", label: "USDT (TRC20)" },
    { value: "usdterc20", label: "USDT (ERC20)" },
    { value: "shiba", label: "SHIBA" },
    { value: "bnb", label: "BNB" },
];

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
};

function SendModal({ onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" initial="hidden" animate="visible" exit="hidden" variants={overlayVariants}>
      <motion.div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} variants={overlayVariants} />
      <motion.div className="relative w-full max-w-md bg-white rounded-t-2xl md:rounded-2xl shadow-lg p-6 z-10" variants={modalVariants} transition={{ type: "spring", duration: 0.5 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Send Funds</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">&times;</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Choose Crypto</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a coin" />
              </SelectTrigger>
              <SelectContent>
                {cryptoOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Wallet</label>
            <input type="text" className="w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="bc1***********" />
            <span className="text-xs text-gray-400">(Crypto wallet)</span>
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Amount</label>
            <input type="number" className="w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="150.00" />
            <span className="text-xs text-gray-400">(Currency: USD)</span>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="agree" className="mr-2" />
            <label htmlFor="agree" className="text-sm">I accept the Transfer</label>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold py-2 rounded shadow hover:from-green-500 hover:to-green-700 transition">Send Funds</button>
        </form>
      </motion.div>
    </motion.div>
  );
}


function ReceiveModal({ onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" initial="hidden" animate="visible" exit="hidden" variants={overlayVariants}>
      <motion.div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} variants={overlayVariants} />
      <motion.div className="relative w-full max-w-md bg-white rounded-t-2xl md:rounded-2xl shadow-lg p-6 z-10" variants={modalVariants} transition={{ type: "spring", duration: 0.5 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Receive Funds</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">&times;</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Choose Crypto</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a coin" />
              </SelectTrigger>
              <SelectContent>
                {cryptoOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Amount</label>
            <input type="number" className="w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="150.00" />
            <span className="text-xs text-gray-400">(Currency: USD)</span>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold py-2 rounded shadow hover:from-red-500 hover:to-red-700 transition">Receive Funds</button>
        </form>
      </motion.div>
    </motion.div>
  );
}

function StakeModal({ onClose }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" initial="hidden" animate="visible" exit="hidden" variants={overlayVariants}>
      <motion.div className="absolute inset-0 bg-black bg-opacity-40" onClick={onClose} variants={overlayVariants} />
      <motion.div className="relative w-full max-w-md bg-white rounded-t-2xl md:rounded-2xl shadow-lg p-6 z-10" variants={modalVariants} transition={{ type: "spring", duration: 0.5 }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Stake Coins</h2>
          <button onClick={onClose} className="text-red-500 text-2xl font-bold">&times;</button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Choose Crypto</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a coin" />
              </SelectTrigger>
              <SelectContent>
                {cryptoOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-blue-700 mb-1">Amount</label>
            <input type="number" className="w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="150.00" />
            <span className="text-xs text-gray-400">(Currency: USD)</span>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-2 rounded shadow hover:from-blue-500 hover:to-blue-700 transition">Stake Coins</button>
        </form>
      </motion.div>
    </motion.div>
  );
}

const ActionButtons = () => {
    const [modal, setModal] = useState(null);

    return (
        <>
            <div className="flex flex-wrap justify-center gap-6 my-4 py-2 px-4">
                {actions.map(({ label, modal: modalType, icon }) =>
                    label === "Buy" ? (
                        <Link
                            key={label}
                            href="/dashboard/buy"
                            className="cursor-pointer bg-white p-2 rounded-xl shadow hover:bg-blue-50 font-medium text-gray-700 transition min-w-[80px] flex flex-col items-center gap-3 text-lg"
                        >
                            <span className="text-3xl">{icon}</span>
                            <span className="text-sm">{label}</span>
                        </Link>
                    ) : label === "401k" ? (
                        <Link
                            key={label}
                            href="/dashboard/retirement401k"
                            className="cursor-pointer bg-white p-2 rounded-xl shadow hover:bg-blue-50 font-medium text-gray-700 transition min-w-[80px] flex flex-col items-center gap-3 text-lg"
                        >
                            <span className="text-3xl">{icon}</span>
                            <span className="text-sm">{label}</span>
                        </Link>
                    ) : (
                        <button
                            key={label}
                            className="cursor-pointer bg-white p-2 rounded-xl shadow hover:bg-blue-50 font-medium text-gray-700 transition min-w-[80px] flex flex-col items-center gap-3 text-lg"
                            onClick={() => modalType && setModal(modalType)}
                        >
                            <span className="text-3xl">{icon}</span>
                            <span className="text-sm">{label}</span>
                        </button>
                    )
                )}
            </div>
            <AnimatePresence>
                {modal === "send" && <SendModal onClose={() => setModal(null)} />}
                {modal === "receive" && <ReceiveModal onClose={() => setModal(null)} />}
                {modal === "stake" && <StakeModal onClose={() => setModal(null)} />}
            </AnimatePresence>
        </>
    );
};

export default ActionButtons;