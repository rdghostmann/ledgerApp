"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const videos = [
  {
    title: "XRP End Game",
    src: "https://www.youtube.com/embed/sFX1d7Si3mA",
    ytTitle: "$10,000 Ripple XRP End Game",
  },
  {
    title: "New World Reserve Cryptocurrency Incoming! - Powered By Ripple (XRP)",
    src: "https://www.youtube.com/embed/yLeji6EidI8",
    ytTitle: "Carney: A new virtual currency could ease reliance on US dollar",
  },
  {
    title: "Interview with Mark Philips",
    src: "https://www.youtube.com/embed/juUgJwBwgWk",
    ytTitle: "Ripple XRP   XRP Army News Welcomes Mark Phillips",
  },
];

export default function FlareNetworkSection() {
  return (
    <section className="pt-24 pb-16 bg-white" id="tfn">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Flare Network</h2>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {videos.map((video, idx) => (
            <motion.div
              key={video.title}
              className="flex flex-col items-center bg-gray-50 rounded-xl shadow-lg p-4 w-full sm:w-[350px] max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-3 text-center">{video.title}</h4>
              <iframe
                width="320"
                height="320"
                src={video.src}
                title={video.ytTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </motion.div>
          ))}
          <motion.div
            className="flex flex-col items-center bg-gray-50 rounded-xl shadow-lg p-4 w-full sm:w-[300px] max-w-xs"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", delay: videos.length * 0.15 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://www.youtube.com/channel/UCHACcQVpw_p0n03zZdSt4fg/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <h4 className="text-lg font-semibold mb-3 text-center">
                Follow Us on YOUTUBE{" "}
                <span className="text-orange-500">XRPQFSTeam1</span>
              </h4>
              <img
                src="/assets/channel.png"
                alt="YouTube Channel"
                href="https://www.youtube.com/channel/UCHACcQVpw_p0n03zZdSt4fg/videos"
                className="rounded-lg w-68 h-68 object-cover border-2 border-orange-400 group-hover:scale-105 transition"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}