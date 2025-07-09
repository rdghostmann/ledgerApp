"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function HowItWorksSection() {
  return (
    <section className="w-full pt-24 pb-20 bg-gray-50" id="hiw">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              How It Works
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 text-justify">
              The Quantum Financial System (QFS) operates with cutting-edge quantum computing and real-time digital monitoring. Designed to replace the corrupt debt-based banking structure, QFS ensures transparency, accountability, and military-grade asset protection.
              <br /><br />
              By integrating your digital wallet, the QFS can trace and secure every transaction — blocking fraud attempts and enabling instant trustless payments. With every transfer recorded immutably, the era of stolen funds and financial manipulation comes to an end.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Create Your Account</h4>
                  <p className="text-gray-600 text-sm">
                    Get started with a free account — your gateway to protected digital finance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Link Your Wallet</h4>
                  <p className="text-gray-600 text-sm">
                    Securely connect your wallet to store, track, and protect your assets 24/7.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Access QFS Loans</h4>
                  <p className="text-gray-600 text-sm">
                    Unlock AI-analyzed mortgage and loan solutions tailored to your digital profile.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <img
                src="/xrp-banner.png"
                alt="How It Works"
                className="rounded-2xl shadow-2xl border border-gray-200"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
