"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownToLine,
  Coins,
  Send,
  WalletCards,
  Briefcase,
} from "lucide-react";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const actions = [
  { label: "Send", modal: "send", icon: <Send size={20} /> },
  { label: "Receive", modal: "receive", icon: <ArrowDownToLine size={20} /> },
  { label: "Buy", modal: null, icon: <WalletCards size={20} /> },
  { label: "Savings", modal: null, icon: <Briefcase size={20} /> },
  { label: "Stake", modal: "stake", icon: <Coins size={20} /> },
];

const cryptoOptions = [
  { value: "btc", label: "Bitcoin" },
  { value: "eth", label: "Ethereum" },
  { value: "sol", label: "Solana" },
  { value: "usdt", label: "USDT (TRC20)" },
  { value: "usdterc20", label: "USDT (ERC20)" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

// 🧩 Modal Template
function ModalTemplate({ title, onClose, children }) {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center" initial="hidden" animate="visible" exit="hidden" variants={overlayVariants}>
      <motion.div className="absolute inset-0 bg-black/60 backdrop-blur" onClick={onClose} />
      <motion.div
        className="relative w-full max-w-md bg-slate-900 rounded-xl text-white p-6 z-10 border border-blue-800 shadow-xl"
        variants={modalVariants}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="text-red-400 text-2xl font-bold">&times;</button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}

function SendModal({ onClose }) {
  return (
    <ModalTemplate title="Send Funds" onClose={onClose}>
      <form className="space-y-4 text-sm">
        <div>
          <label className="block mb-1">Choose Crypto</label>
          <Select>
            <SelectTrigger className="w-full bg-slate-800 text-white border border-slate-700">
              <SelectValue placeholder="Select coin" />
            </SelectTrigger>
            <SelectContent>
              {cryptoOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1">Recipient Wallet</label>
          <input type="text" placeholder="e.g. bc1xxx..." className="w-full bg-slate-800 border border-slate-700 px-3 py-2 rounded text-white" />
        </div>
        <div>
          <label className="block mb-1">Amount (USD)</label>
          <input type="number" placeholder="e.g. 150.00" className="w-full bg-slate-800 border border-slate-700 px-3 py-2 rounded text-white" />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">I confirm this transfer</label>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 rounded py-2 font-semibold text-white transition">Send Now</button>
      </form>
    </ModalTemplate>
  );
}

function ReceiveModal({ onClose }) {
  return (
    <ModalTemplate title="Receive Funds" onClose={onClose}>
      <form className="space-y-4 text-sm">
        <div>
          <label className="block mb-1">Choose Crypto</label>
          <Select>
            <SelectTrigger className="w-full bg-slate-800 text-white border border-slate-700">
              <SelectValue placeholder="Select coin" />
            </SelectTrigger>
            <SelectContent>
              {cryptoOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1">Expected Amount (USD)</label>
          <input type="number" placeholder="e.g. 150.00" className="w-full bg-slate-800 border border-slate-700 px-3 py-2 rounded text-white" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 rounded py-2 font-semibold text-white transition">Generate Address</button>
      </form>
    </ModalTemplate>
  );
}

function StakeModal({ onClose }) {
  return (
    <ModalTemplate title="Stake Crypto" onClose={onClose}>
      <form className="space-y-4 text-sm">
        <div>
          <label className="block mb-1">Select Coin</label>
          <Select>
            <SelectTrigger className="w-full bg-slate-800 text-white border border-slate-700">
              <SelectValue placeholder="Select coin" />
            </SelectTrigger>
            <SelectContent>
              {cryptoOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <label className="block mb-1">Amount (USD)</label>
          <input type="number" className="w-full bg-slate-800 border border-slate-700 px-3 py-2 rounded text-white" placeholder="e.g. 100.00" />
        </div>
        <button className="w-full bg-purple-600 hover:bg-purple-700 rounded py-2 font-semibold text-white transition">Stake Now</button>
      </form>
    </ModalTemplate>
  );
}

const ActionButtons = () => {
  const [modal, setModal] = useState(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 py-6 px-2 sm:px-4 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
        {actions.map(({ label, modal: modalType, icon }) => {
          const commonClass =
            "w-[80px] h-[80px] bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl flex flex-col items-center justify-center gap-1 transition";
          return modalType ? (
            <button
              key={label}
              onClick={() => setModal(modalType)}
              className={commonClass}
            >
              <div className="text-blue-400">{icon}</div>
              <span className="text-xs">{label}</span>
            </button>
          ) : (
            <Link key={label} href={`/dashboard/${label.toLowerCase()}`} className={commonClass}>
              <div className="text-green-400">{icon}</div>
              <span className="text-xs">{label}</span>
            </Link>
          );
        })}
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
