"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 pb-10">
      {/* Sticky/absolute Navbar stacked on top */}
      <div className="absolute top-0 left-0 w-full z-30">
        <div className="sticky top-0">
          <Navbar />
        </div>
      </div>
      {/* Give space for navbar height */}
      <div className="pt-20 w-11/12 mx-auto">
        <Splide
          aria-label="Quantum Financial System"
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            speed: 800,
            classes: {
              arrows: "splide__arrows flex justify-between absolute top-1/2 w-full px-4 z-10",
              arrow: "splide__arrow bg-gray-700/70 hover:bg-gray-900 text-white rounded-full p-2 transition",
              pagination: "splide__pagination flex justify-center gap-2 mt-4",
              page: "splide__pagination__page w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition",
            },
          }}
        >
          <SplideSlide>
            <div className="flex flex-col items-center justify-center min-h-[350px] bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg p-8 text-center">
              <span className="text-xs text-blue-200 tracking-widest mb-2">QUANTUM FINANCIAL SYSTEM</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">QUANTUM FINANCIAL SYSTEM</h2>
              <p className="text-gray-200 mb-6">
                QUANTUM FINANCIAL SYSTEM gives immunity against cyber attacks and bad market fluctuations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition text-center"
                  href="https://authorizedqfsledger.com/wallet/app/register.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REGISTER NOW
                </Link>
                <Link
                  className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow transition text-center"
                  href="https://authorizedqfsledger.com/wallet/app/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOGIN NOW
                </Link>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="flex flex-col items-center justify-center min-h-[350px] bg-gradient-to-r from-purple-900 to-indigo-700 rounded-xl shadow-lg p-8 text-center">
              <span className="text-xs text-purple-200 tracking-widest mb-2">QUANTUM FINANCIAL SYSTEM</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">QUANTUM FINANCIAL SYSTEM</h2>
              <p className="text-gray-200 mb-6">
                QUANTUM FINANCIAL SYSTEM(QFS) gives your asset the protection it deserves, never miss this opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition text-center"
                  href="https://authorizedqfsledger.com/wallet/app/register.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  REGISTER NOW
                </Link>
                <Link
                  className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded shadow transition text-center"
                  href="https://authorizedqfsledger.com/wallet/app/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LOGIN NOW
                </Link>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}