"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function QFSCard() {
  return (
    <section className="pt-12 pb-10 bg-gray-50 mt-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content Section */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
            id="about"
          >
            <div className="mb-6">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Get access to QFS CARDS that allows you to shop in over 118 countries worldwide
              </h4>
              <p className="text-gray-700 mb-6">
                Sign up to synchronize your digital Wallets with QFS now for maximum cyber security and swift funding/transfer of your assets using the Quantum Finance Credit Card
              </p>
            </div>
            <ul className="max-w-10/12 space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <span className="pt-1 flex-shrink-0">
                  <img src="https://img.icons8.com/?size=96&id=23279&format=png" width={40} height={40} alt="Sign Up" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Sign Up</h3>
                  <p className="text-gray-600">
                    Sign up for onboarding on QFS, then verify your identity.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="pt-1 flex-shrink-0">
                  <img src="https://img.icons8.com/?size=96&id=63760&format=png" width={40} height={40} alt="Wait For Approval" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Wait For Approval</h3>
                  <p className="text-gray-600">
                    Once KYC Submission is Approved, proceed to Sync your wallet with KYC. You can also Apply for Humanitarian Project.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="pt-1 flex-shrink-0">
                  <img src="https://img.icons8.com/?size=96&id=3EFzPFftonWA&format=png" width={40} height={40} alt="Get QFS Card" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Get QFS Card</h3>
                  <p className="text-gray-600">
                    Get your QFS Cards now to get acquainted with the Quantum Med beds, Quantum Computers, Q-phones and Shop in over 118 countries.
                  </p>
                </div>
              </li>
            </ul>
            <Link
              href="/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white font-semibold px-8 py-3 mt-3 rounded transition shadow border border-blue-700 group"
            >
              Get Started
              <span
                className="absolute rounded-full transition bg-blue-700 opacity-0 group-hover:opacity-40 pointer-events-none"
                style={{ top: "15.8px", left: "91.7px", width: "16px", height: "16px" }}
              ></span>
            </Link>
          </motion.div>
          {/* Image Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
          >
            <Image
              src="/assets/QFSCard.png"
              alt="QFS Credit Card"
              className="rounded-xl shadow-lg max-w-xs sm:max-w-md w-full h-auto"
              width={400}
              height={260}
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}