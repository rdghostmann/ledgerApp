"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "The Flare Network", href: "/flare-network" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Recent News", href: "/news" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Register", href: "/register" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-bold">Ledger App</div>
        <button
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
        <ul className="hidden md:flex gap-4 items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded hover:bg-gray-700 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4 bg-gray-900">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block px-3 py-2 rounded hover:bg-gray-700 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
      );
}