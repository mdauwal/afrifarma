"use client";

import React, { useState } from "react";
import { Bookmark, Minus, Plus, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { id: 8, name: "Tomatoes", variant: "Vegetables", price: "₦55", oldPrice: "₦60", image: "/images/hero-bg-1.jpg" },
  { id: 7, name: "Banana", variant: "Fruits", price: "₦60", oldPrice: "₦89.99", image: "/images/hero-bg-2.jpg" },
  { id: 6, name: "Guinea Fowl", variant: "Livestock", price: "₦30", oldPrice: "₦70", image: "/images/gfowl.jpg" },
  { id: 5, name: "Rice", variant: "Crops", price: "₦23", oldPrice: "₦45", image: "/images/rice.jpg" },
  { id: 4, name: "Hen", variant: "Livestock", price: "₦55", oldPrice: "₦60", image: "/images/fowl.jpg" },
  { id: 3, name: "Goat", variant: "Livestock", price: "₦60", oldPrice: "₦89.99", image: "/images/goat.jpg" },
  { id: 2, name: "Okra", variant: "Vegetable", price: "₦30", oldPrice: "₦70", image: "/images/hero-bg-3.jpg" },
  { id: 1, name: "Maize", variant: "Crops", price: "₦23", oldPrice: "₦45", image: "/images/maize.jpg" }
];

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white p-4 rounded-2xl flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl" />
      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <Bookmark className="text-[#000000] cursor-pointer" />
      </div>
      <p className="text-gray-500 text-sm">{product.variant}</p>
      <div className="mt-1 flex items-center">
        <span className="text-lg font-bold text-[#000000]">{product.price}</span>
        <span className="text-[#FC0000] line-through ml-2">{product.oldPrice}</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center border px-2 py-1 border-[#096036] rounded-full">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 text-[#096036]">
            <Minus size={16} />
          </button>
          <span className="px-3">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="p-1 text-[#096036]">
            <Plus size={16} />
          </button>
        </div>
        <button className="bg-[#096036] text-white px-4 py-2 rounded-full text-sm">Add to cart</button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 < products.length ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : products.length - 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-[#096036] text-3xl font-bold">Fresh Deals</h2>
        <button 
  onClick={() => setShowAll(!showAll)}
  className={`px-5 py-2.5 text-sm font-semibold rounded-full border-2 transition-all duration-300 ease-in-out
    ${showAll 
      ? "bg-[#096036] text-white border-[#096036] shadow-md scale-105" 
      : "border-[#096036] text-[#096036] hover:bg-[#096036] hover:text-white hover:shadow-md active:scale-95"}`}
>
  {showAll ? "Show Less" : "View All"}
</button>

      </div>
      <p className="text-gray-500 mt-2">Discover fresh farm produce and livestock at unbeatable prices, sourced directly from trusted farmers.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 overflow-hidden">
        {(showAll ? products : products.slice(currentIndex, currentIndex + 4)).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="flex justify-between items-center mt-6 relative">
      <div className="flex space-x-2">
  {products.slice(currentIndex, currentIndex + 4).map((_, i) => (
    <div
      key={i}
      className={`w-2.5 h-2.5 rounded-full ${
        currentIndex % products.length === i ? "bg-[#096036]" : "bg-gray-400"
      }`}
    ></div>
  ))}
</div>

        <div className="flex space-x-4">
          <button onClick={prevSlide} className="p-2 border-2 border-[#096036] text-[#096036] rounded-full hover:bg-[#096036] hover:text-white transition">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextSlide} className="p-2 border-2 border-[#096036] text-[#096036] rounded-full hover:bg-[#096036] hover:text-white transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
