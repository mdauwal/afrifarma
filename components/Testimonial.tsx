"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Yusuf",
    role: "Trusted Logistics Partner",
    text: "Partnering with AfriFarma has been great for my delivery business. The real-time GPS tracking and clear delivery details make my work efficient. Plus, I’ve gained new clients and improved my service ratings!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mary Okeke",
    role: "Satisfied Customer",
    text: "Shopping on AfriFarma is a breeze! I’ve never had fresher vegetables delivered straight to my door. The product reviews and farmer profiles give me confidence in what I’m buying. It’s my go-to marketplace for farm-fresh produce.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    name: "Dorcas Moses",
    role: "Verified Farmer",
    text: "AfriFarma has completely transformed my small farm business. I’ve reached more customers in the past three months than I ever thought possible. The dashboard is easy to use, and I love being able to track my sales trends. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Tomilola Yusuf",
    role: "Agricultural Enthusiast",
    text: "I love the transparency AfriFarma provides. The ability to communicate with farmers directly and track deliveries is a game-changer!",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Fatima Bello",
    role: "Organic Food Lover",
    text: "AfriFarma has given me access to fresh, organic farm produce without hassle. I highly recommend it!",
    image: "https://randomuser.me/api/portraits/women/38.jpg",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % (testimonials.length - itemsPerPage + 1));
  };

  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length - itemsPerPage + 1) % (testimonials.length - itemsPerPage + 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-[#096036]">Testimonials</h2>
        <p className="text-gray-600">Words from our users</p>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {testimonials.slice(index, index + itemsPerPage).map((t, i) => (
            <div key={i} className="bg-white shadow-lg p-6 rounded-lg">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-700">{t.text}</p>
              <div className="flex items-center mt-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full mr-3" />
                <div className="text-left">
                  <p className="font-bold text-[#096036]">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full items-center mt-6">
          <div className="flex space-x-2">
            {testimonials.slice(0, testimonials.length - itemsPerPage + 1).map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${i === index ? "bg-[#096036]" : "bg-gray-300"}`}
              />
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              <ChevronLeft className="text-[#096036]" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 bg-white shadow-md rounded-full hover:bg-gray-100"
            >
              <ChevronRight className="text-[#096036]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
