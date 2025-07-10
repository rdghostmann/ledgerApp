"use client";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <section className="relative pb-10 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <div className="sticky top-0">
          <Navbar />
        </div>
      </div>

      {/* Content */}
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto">
        <Splide
          aria-label="Quantum Financial System"
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            interval: 6000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            speed: 1000,
            classes: {
              arrows: "splide__arrows flex justify-between absolute top-1/2 w-full px-4 z-10",
              arrow: "splide__arrow bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition",
              pagination: "splide__pagination flex justify-center gap-2 mt-6",
              page: "splide__pagination__page w-3 h-3 rounded-full bg-gray-600 hover:bg-white transition",
            },
          }}
        >
          {[
            {
              title: "Quantum Financial System",
              description:
                "Quantum Financial System gives immunity against cyber attacks and bad market fluctuations.",
              image: "/trump1.jpg", // replace with your image path
            },
            {
              title: "Next-Gen Asset Security",
              description:
                "QFS gives your asset the protection it deserves. Never miss this opportunity.",
              image: "/trump2.jpg", // replace with your image path
            },
          ].map((slide, idx) => (
            <SplideSlide key={idx}>
              <div
                className="flex flex-col items-center justify-center min-h-[420px] rounded-3xl shadow-xl p-8 text-center text-white relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/10 z-0 rounded-3xl backdrop-blur-sm"></div>

                <div className="relative z-10 max-w-2xl">
                  <span className="text-sm tracking-widest uppercase text-blue-200 mb-2 block">
                    Quantum Financial System
                  </span>
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 drop-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/register"
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition text-sm"
                    >
                      Register Now
                    </Link>
                    <Link
                      href="/login"
                      className="border border-white/30 hover:border-white/50 text-white font-medium px-6 py-3 rounded-full backdrop-blur-sm transition text-sm"
                    >
                      Login Now
                    </Link>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
