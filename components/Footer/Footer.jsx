"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <footer className="w-full bg-gray-50 pt-20 pb-10 border-t border-gray-200" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          {/* QFS LEDGER */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4 text-white">QFS LEDGER</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The QUANTUM FINANCIAL SYSTEM – QFS has no comparison to anything that has ever been introduced to the world before. It has no peer; it has no equivalent in advanced technology of any other system before it.
              It is brand new. It reigns supreme in the technology it applies, in order to accomplish the one hundred percent financial security and transparency all currency account holders require.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              With the QFS, the monetary system of the world can easily be changed to encompass gold-backed currencies that completely eliminate the use of the old Cabal central banking system.
              Regrettably, to fully comprehend the advanced QFS-structure, there doesn’t exist an equivalent technology to serve as an example.
            </p>
          </div> */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">QFS LEDGER</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The Quantum Financial System (QFS) delivers unmatched security and transparency for all currency holders. With advanced technology and gold-backed currencies, QFS sets a new standard in global finance.
            <h3 className="text-xl font-bold mb-4 text-gray-900">QFS Ledger</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The Quantum Financial System is designed for a new era of currency — gold-backed,
              secure, and transparent. Our mission is to protect digital assets through
              military-grade architecture, eliminating the need for traditional banking corruption.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition">
                  About QFS
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-600 hover:text-blue-600 transition">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition">
                Digital Currency Protection
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition">
                Wallet Security System
              </li>
              <li className="text-gray-600 hover:text-blue-600 cursor-pointer transition">
                Mobile & Web Banking
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <span className="font-medium">Email:</span>{" "}
                <Link
                  href="mailto:support@authorizedqfsledger.com"
                  className="hover:text-blue-600 transition"
                >
                  support@authorizedqfsledger.com
                </Link>
              </li>
              <li>
                <span className="font-medium">Support:</span>{" "}
                <Link
                  href="mailto:support@authorizedqfsledger.com"
                  className="hover:text-blue-600 transition"
                >
                  support@authorizedqfsledger.com
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-12 text-center text-xs text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        >
          &copy; {new Date().getFullYear()} QFS Ledger. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
