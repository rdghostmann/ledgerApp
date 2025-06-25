"use client";
import Link from "next/link";
import { useState } from "react";
import { LogIn, UserPlus } from "lucide-react";

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

// Only show these on desktop nav
const desktopLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center px-4 py-3 relative">
        {/* Logo */}
        <div className="text-2xl font-bold flex-shrink-0">Ledger App</div>
        {/* Desktop Nav Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-4 items-center">
            {desktopLinks.map((link) => (
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
        {/* Desktop Register/Login Right */}
        <div className="hidden md:flex gap-2 items-center ml-auto">
          <Link
            href="/register"
            className="flex items-center gap-1 px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
          >
            <UserPlus size={18} /> Register
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-1 px-3 py-2 rounded bg-gray-700 hover:bg-gray-800 transition"
          >
            <LogIn size={18} /> Login
          </Link>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 z-20 ml-auto"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "opacity-0" : ""}`}></span>
          <span className={`h-1 w-7 bg-white rounded transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
      {/* Mobile menu - slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-10 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ boxShadow: open ? "-2px 0 8px rgba(0,0,0,0.2)" : "none" }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
            <span className="text-2xl font-bold">Ledger App</span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-4 py-4 flex-1">
            {navLinks
              .filter((l) => l.label !== "Register" && l.label !== "Login")
              .map((link, idx) => (
                <li
                  key={link.href}
                  style={{
                    transition: "transform 0.3s cubic-bezier(.4,0,.2,1), opacity 0.3s",
                    transitionDelay: open ? `${idx * 60 + 100}ms` : "0ms",
                    transform: open
                      ? "translateX(0)"
                      : "translateX(40px)",
                    opacity: open ? 1 : 0,
                  }}
                >
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
          <div className="flex flex-col gap-2 px-4 pb-6">
            <Link
              href="/register"
              className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              <UserPlus size={18} /> Register
            </Link>
            <Link
              href="/login"
              className="flex items-center gap-2 px-3 py-2 rounded bg-gray-700 hover:bg-gray-800 transition"
              onClick={() => setOpen(false)}
            >
              <LogIn size={18} /> Login
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay for mobile menu */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-0 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  );
}