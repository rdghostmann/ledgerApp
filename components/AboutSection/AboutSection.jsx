"use client";
import { motion } from "framer-motion";
import { BookOpen, Handshake, Lock } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full pt-24 pb-20 bg-white text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Video Section */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <video
              width="100%"
              height="100%"
              poster="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=032"
              controls
              className="rounded-2xl shadow-2xl border border-gray-700 max-w-2xl w-full"
            >
              <source src="/qfs.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, type: "spring" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              What is the Quantum Financial System (QFS)?
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-sm md:text-base text-justify">
              The Quantum Financial System is a revolutionary shift in global economics, built to replace the corrupt centralized debt system. It provides unparalleled protection against fraud, cyber threats, and market manipulation using advanced AI and extraterrestrial-level technology.
              <br /><br />
              This secure, decentralized system is not just a financial upgrade — it’s a safeguard for wealth, retirement, and future financial freedom.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <Lock className="text-blue-500 mt-1" size={28} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Military-Grade Security</h4>
                  <p className="text-gray-400 text-sm">
                    QFS is resistant to cyberattacks and built for flawless trustless transactions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Handshake className="text-purple-500 mt-1" size={28} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Transparent & Decentralized</h4>
                  <p className="text-gray-400 text-sm">
                    Every transaction is immutable, traceable, and auditable — ensuring fairness for all.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BookOpen className="text-green-500 mt-1" size={28} />
                <div>
                  <h4 className="text-lg font-semibold text-white">Backed by Knowledge</h4>
                  <p className="text-gray-400 text-sm">
                    Learn how QFS can reshape your retirement and financial independence.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.qfs1776.com/_files/ugd/a16bfe_46e53371c3924d10a587d58fb9e5a0e1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition duration-300"
            >
              <BookOpen size={18} /> Download QFS Manual
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
