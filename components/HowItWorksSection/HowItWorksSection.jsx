"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";

export default function HowItWorksSection() {
  return (
    <section className="w-full pt-12 pb-10 bg-gray-50 mt-8" id="hiw">

      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* Content */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works!
              </h2>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                With the activation of the QFS, the Alliance will have completely destroyed the Rothschild Central Banking system that has been designed by Meyer Amschel Rothschild (1744 – 1812) to control the world economy and put the world population into debt slavery.
                <br /><br />
                Truth is, the QFS has been running in parallel with the Central Banking System for some time and has countered many hacking attempts by the Cabal to steal funds. In the process, many banksters have been caught red handed and arrested. This powerful quantum computer system could assign a digital number to every fiat dollar/euro/Yen sitting in every bank account all over the world and consequently monitor in real-time money streams; knowing exactly where particular monies went when it was transferred, who sent it by their login info, and which account received the money.
                <br /><br />
                Imagine the frustration of a banker who has just stolen some money and this illegally transferred to another account and subsequently being arrested in real time for theft. These poor bankster devils, have been defeated. They are taking their last gasp of air before the weight of their ‘death plans’ comes crashing down on their pathetic, baby-blood-sucking, bodies.
              </p>
            </div>
            <ul className="space-y-6 mb-8">
              <li className="flex items-start gap-4">
                <FaCheck className="text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Sign Up</h3>
                  <p className="text-gray-600">
                    Register a free account, and take your first step to securing your asset.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaCheck className="text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Secure Your Asset</h3>
                  <p className="text-gray-600">
                    Connect your Wallet to the vault, to secure your asset.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FaCheck className="text-blue-600 mt-1" />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">Loans &amp; Mortgages</h3>
                  <p className="text-gray-600">
                    QUANTUM FINANCIAL SYSTEM guide you to make the right loan and mortgage choices that are absolutely suiting to you.
                  </p>
                </div>
              </li>
            </ul>
            <Link
              href="/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded transition shadow"
            >
              Learn More
            </Link>
          </motion.div>
          {/* Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg">
              <img
                src="/assets/xrp-banner.png"
                alt="Works"
                className="shadow-lg rounded-xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}