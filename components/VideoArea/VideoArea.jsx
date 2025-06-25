"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function VideoArea() {
  return (
    <section
      className="relative min-h-[340px] sm:min-h-[420px] md:min-h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/video-bg.png')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <Link
            href="https://www.youtube.com/channel/UCHACcQVpw_p0n03zZdSt4fg/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white hover:bg-red-600 transition duration-300 shadow-lg group"
          >
            <FaPlay className="text-blue-800 group-hover:text-white text-2xl sm:text-3xl group-hover:scale-110 transition-transform" />
          </Link>
        </div>
        <span className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-snug max-w-xs sm:max-w-lg md:max-w-xl">
          Watch Our Latest Video For
          <br className="hidden md:block" />
          Better Innovation
        </span>
      </motion.div>
    </section>
  );
}