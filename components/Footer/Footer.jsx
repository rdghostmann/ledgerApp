// Example: components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-24 pb-16 bg-black text-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
        >
          {/* QFS LEDGER */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">QFS LEDGER</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              The QUANTUM FINANCIAL SYSTEM – QFS has no comparison to anything that has ever been introduced to the world before. It has no peer; it has no equivalent in advanced technology of any other system before it. It is brand new. It reigns supreme in the technology it applies, in order to accomplish the one hundred percent financial security and transparency all currency account holders require. With the QFS, the monetary system of the world can easily be changed to encompass gold-backed currencies that completely eliminate the use of the old Cabal central banking system. Regrettably, to fully comprehend the advanced QFS-structure, there doesn’t exist an equivalent technology to serve as an example.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About QFS
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-blue-400 transition cursor-pointer">
                  Digital Currency protection
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition cursor-pointer">
                  Wallet Security System
                </span>
              </li>
              <li>
                <span className="hover:text-blue-400 transition cursor-pointer">
                  Banking at your fingertips, anytime anywhere
                </span>
              </li>
            </ul>
          </div>
          {/* Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contacts</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-semibold">Email:</span>{" "}
                <Link
                  href="mailto:support@authorizedqfsledger.com"
                  className="hover:text-blue-400 transition"
                >
                  support@authorizedqfsledger.com
                </Link>
              </li>
              <li>
                <span className="font-semibold">Support:</span>{" "}
                <Link
                  href="mailto:support@authorizedqfsledger.com"
                  className="hover:text-blue-400 transition"
                >
                  support@authorizedqfsledger.com
                </Link>
              </li>
              {/* Uncomment if you want to show address
              <li>
                <span className="font-semibold">Address:</span>{" "}
                <span>Watlington, Oxfordshire England</span>
              </li>
              */}
            </ul>
          </div>
        </motion.div>
        <div className="mt-12 text-center text-purple-700
text-xs">
          &copy; {new Date().getFullYear()} QFS Ledger. All rights reserved.
        </div>
      </div>
    </footer>
  );
}