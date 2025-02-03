"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero-bg-1.jpg",
    title: "Fresh from the Farm to Your Doorstep",
    description:
      "Discover locally grown, organic produce and support sustainable farming practices. Shop fresh vegetables, fruits, grains, and more directly from trusted farmers in your area.",
    buttonText: "Shop Now",
  },
  {
    image: "/images/hero-bg-2.jpg",
    title: "Empowering Farmers, Connecting Communities",
    description:
      "Join a thriving network of farmers, consumers, and logistics partners working together to make fresh produce accessible to everyone.",
    buttonText: "Join the Community",
  },
  {
    image: "/images/hero-bg-3.jpg",
    title: "Seamless Logistics, On-Time Deliveries",
    description:
      "Reliable delivery services powered by our trusted logistics partners. Track your orders in real-time and enjoy hassle-free shopping.",
    buttonText: "Track Your Order",
  },
  {
    image: "/images/hero-bg-1.jpg",
    title: "Your Trusted Marketplace for Farm Goods",
    description:
      "Browse verified farmers, read product reviews, and make secure transactions. AfriFarma ensures trust and transparency at every step.",
    buttonText: "Start Exploring",
  },
  {
    image: "/images/hero-bg-2.jpg",
    title: "Grow Your Farm Business with Us",
    description:
      "Farmers, list your products, reach more customers, and monitor sales trends easily. Join AfriFarma and take your business to new heights.",
    buttonText: "List Your Products",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-start px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Image Cross-Fade */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[index].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {slides[index].title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={slides[index].description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl"
          >
            {slides[index].description}
          </motion.p>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.button
            key={slides[index].buttonText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-6 px-6 py-3 bg-white text-[#096036] font-semibold rounded-lg shadow-md hover:bg-green-100"
          >
            {slides[index].buttonText}
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}
