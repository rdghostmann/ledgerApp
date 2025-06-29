'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "This new innovation of QFS is just top notch, now i don't have to be afraid of crypto fluctuations like before again.",
    name: 'Charlotte',
    location: 'England',
    img: '/assets/trustpilot.png',
  },
  {
    text: 'All thanks to QUANTUM FINANCIAL SYSTEM my crypto wallet is now safe, no more losses ...',
    name: 'Luck',
    location: 'United State',
    img: '/assets/trustpilot.png',
  },
  {
    text: "Je n'ai jamais cru aux systèmes sécurisés jusqu'à ce que je découvre QFS Ledger Security. Ce coffre-fort est tout simplement le meilleur, je le recommande à tous.",
    name: 'Elise',
    location: 'France',
    img: '/assets/trustpilot.png',
  },
];

const duplicated = [...testimonials, ...testimonials]; // for smooth loop

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const CARD_WIDTH = 340;
  const GAP = 30;
  const SLIDE_WIDTH = CARD_WIDTH + GAP;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#f8f9fd] py-20 overflow-hidden" id="t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-[#2a2b77]">What People Say</h2>

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex gap-[30px]"
            style={{
              transform: `translateX(-${index * SLIDE_WIDTH}px)`,
              transition: 'transform 0.8s ease-in-out',
              width: `${duplicated.length * SLIDE_WIDTH}px`,
            }}
          >
            {duplicated.map((t, i) => (
              <div
                key={i}
                className="min-w-[340px] bg-white border border-[#d4dbf9] rounded-2xl p-6 relative text-center shadow-sm"
              >
                {/* Top Quote Icon */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#e7ebff] rounded-full w-12 h-12 flex items-center justify-center text-[#2a2b77] text-2xl font-bold shadow">
                    &rdquo;
                  </div>
                </div>

                <p className="text-sm md:text-base mt-8 text-[#2a2b77]">{t.text}</p>

                {/* Pointer */}
                <div className="w-4 h-4 bg-white border-l border-b border-[#d4dbf9] rotate-45 absolute bottom-[-8px] left-1/2 transform -translate-x-1/2"></div>

                {/* Bottom */}
                <img src={t.img} alt="Trustpilot" className="w-24 mx-auto mt-10 mb-2" />
                <h3 className="font-semibold text-lg text-[#2a2b77]">{t.name}</h3>
                <span className="text-gray-500 text-sm">{t.location}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
