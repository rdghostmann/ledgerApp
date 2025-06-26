"use client";
import React from "react";

const wallets = [
  {
    name: "Trust Wallet",
    icon: "web.io/trust-wallet-66f8777532931d9c09b633344981a6a9.png",
  },
  {
    name: "SafePal",
    icon: "web.io/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png",
  },
  {
    name: "Exodus",
    icon: "web.io/exodus.png",
  },
  {
    name: "Lobstr",
    icon: "web.io/Lobstr.png",
  },
  {
    name: "Dharma",
    icon: "web.io/Dharma.jpg",
  },
  {
    name: "HaloDeFi Wallet",
    icon: "web.io/Halodefi.jpg",
  },
  {
    name: "Metamask",
    icon: "web.io/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png",
  },
  {
    name: "Rainbow",
    icon: "web.io/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png",
  },
  // ...add more wallets as needed
];

const ConnectWallet = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Wallets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Multiple iOS and Android wallets support the protocol. Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet. Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className="flex flex-col items-center bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
            <div className="cursor-pointer w-16 h-16 flex items-center justify-center mb-2">
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="text-base font-medium text-gray-800 text-center">{wallet.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConnectWallet;