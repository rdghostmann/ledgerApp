"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

// Counter data
const counters = [
  {
    icon: "/assets/img/counter-shape3.png",
    value: 8698958943561,
    label: "Secured Assets",
  },
  {
    icon: "/assets/img/counter-shape4.png",
    value: 87764312,
    label: "Satisfied Users",
  },
  {
    icon: "/assets/img/counter-shape3.png",
    value: 170294,
    label: "Global Awards",
  },
  {
    icon: "/assets/img/counter-shape4.png",
    value: 88764316,
    label: "Registered Users",
  },
];

// Custom hook for count-up effect
function useCountUp(end, duration = 2, start = false) {
  const [count, setCount] = useState(0);
  const frame = useRef();

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        frame.current = requestAnimationFrame(animate);
      }
    };

    frame.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame.current);
  }, [end, duration, start]);

  return count.toLocaleString();
}

export default function CounterSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
      setStartCounting(true);
    }
  }, [inView, controls]);

  return (
    <section ref={ref} className="w-full py-24 relative overflow-hidden">
      {/* ✅ ONE decorative shape centered behind content */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 opacity-20">
        <Image
          src="/assets/counter-shape4.png"
          alt="Decorative Background"
          width={700}
          height={200}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {counters.map((counter, idx) => {
            const count = useCountUp(counter.value, 2.5, startCounting);
            return (
              <motion.div
                key={counter.label}
                className="flex flex-col items-center bg-gray-50 rounded-xl shadow-md p-6"
                initial={{ opacity: 0, y: 40 }}
                animate={controls}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
              >
                <Image
                  src={counter.icon}
                  alt={counter.label}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-3xl font-extrabold text-indigo-700 mb-1 select-none">
                  {count}
                </h3>
                <p className="text-gray-600 font-medium text-center">{counter.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
