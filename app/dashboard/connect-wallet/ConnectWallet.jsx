"use client";
import React from "react";

const wallets = [
  {
    name: "Trust Wallet",
    icon: "/twt.png",
  },
  {
    name: "SafePal",
    icon: "/sfp.png",
  },
  {
    name: "Exodus",
    icon: "/exodus.jpg",
  },
  {
    name: "Lobstr",
    icon: "/lobstr.jpg",
  },
  {
    name: "Dharma",
    icon: "/dharma.jpg",
  },
  {
    name: "HaloDeFi Wallet",
    icon: "/halodefi.png",
  },
  {
    name: "Metamask",
    icon: "/metamask.png",
  },
  {
    name: "Rainbow",
    icon: "/rainbow.jpg",
  },
  // ...add more wallets as needed
];

const ConnectWallet = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="mb-8 text-center w-4/6 mx-auto">
        <h1 className="text-3xl font-bold mb-2">Wallets</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Multiple iOS and Android wallets support the protocol. <br className="hidden sm:block" /> Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Interaction between mobile apps and mobile browsers are supported via mobile deep linking.        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className="flex flex-col items-center cursor-pointer bg-white rounded-xl shadow hover:shadow-lg focus-within:shadow-lg transition py-4 px-3 transform ease-in-out duration-100 hover:scale-105 focus-within:scale-105"
            tabIndex={0}
          >
            <div className="overflow-hidden w-14 h-14 rounded-full flex items-center justify-center mb-2">
              <img
                src={wallet.icon}
                alt={wallet.name}
                width={56}
                height={56}
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