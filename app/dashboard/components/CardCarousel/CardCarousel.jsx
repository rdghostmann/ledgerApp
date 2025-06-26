import React from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import Splide CSS

const cards = [
  {
    id: 1,
    balance: "$0.00",
    label: "Total Balance",
    verified: true,
    link: "/dashboard/assets",
  },
  {
    id: 2,
    balance: "$0.00",
    label: "Total Balance",
    verified: true,
    link: "/dashboard/assets",
  },
  // Add more cards as needed
];

const CardCarousel = () => {
  return (
    <div className="w-full max-10/12 mx-auto">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          gap: "1rem",
          autoplay: true,
          interval: 3000,
          arrows: false,
          pagination: true,
          drag: true,
        }}
        aria-label="Balance Cards"
      >
        {cards.map((card, idx) => (
          <SplideSlide key={card.id}>
            <div className="bg-gradient-to-br from-blue-700 to-violet-700 rounded-xl shadow-lg h-40 flex flex-col justify-between relative overflow-hidden">
              <div className="p-4">
                <h1 className="text-xs font-semibold text-white mb-1">
                  <Link href={card.link} className="hover:underline">
                    {card.label}
                  </Link>
                </h1>
                <div>
                  <h2 className="text-2xl font-bold text-white">{card.balance}</h2>
                </div>
              </div>
              <span className="absolute top-2 right-4 bg-green-600 text-white text-xs font-mono px-3 py-1 rounded-full shadow">
                {card.verified ? "verified" : "unverified"}
              </span>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default CardCarousel;