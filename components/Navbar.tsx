"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Bookmark, Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
  Crops: ["Rice", "Maize", "Wheat", "Barley"],
  Fruits: ["Mango", "Banana", "Pineapple", "Orange"],
  Vegetables: ["Tomato", "Carrot", "Spinach", "Onion"],
  Livestock: ["Cattle", "Goat", "Chicken", "Sheep"],
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="w-full">
      {/* Navbar Top Section */}
      <div className="bg-white text-[#096036] px-6 py-4 flex items-center justify-between shadow-md md:shadow-none md:bg-white md:py-6">
        <img src="/images/t4.png" alt="AfriFarma Logo" className="h-8" />
        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-[#096036] px-4 py-2 rounded-full hover:bg-[#096036] hover:text-white">
            List your product
          </button>
          <button className="border border-[#096036] px-4 py-2 rounded-full hover:bg-[#096036] hover:text-white">
            Sign Up
          </button>
          <button className="bg-[#096036] text-white px-4 py-2 rounded-full">
            Sign In
          </button>
          <ShoppingCart className="text-[#096036] cursor-pointer" size={24} />
          <Bookmark className="text-[#096036] cursor-pointer" size={24} />
        </div>
        <button
          className="md:hidden text-[#096036]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white text-[#096036] px-6 py-4 flex flex-col items-center shadow-md"
          >
            <div className="w-full flex flex-col items-center space-y-3 bg-green-100 p-4 rounded-lg shadow">
              <button className="w-full border border-[#096036] px-4 py-2 rounded-full hover:bg-[#096036] hover:text-white transition">
                List your product
              </button>
              <button className="w-full border border-[#096036] px-4 py-2 rounded-full hover:bg-[#096036] hover:text-white transition">
                Sign Up
              </button>
              <button className="w-full bg-[#096036] text-white px-4 py-2 rounded-full transition">
                Sign In
              </button>
              <div className="flex space-x-4 mt-2">
                <ShoppingCart
                  className="text-[#096036] cursor-pointer"
                  size={24}
                />
                <Bookmark className="text-[#096036] cursor-pointer" size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar Bottom Section (Sticky) */}
<div className="bg-[#096036] text-white px-6 py-3 flex flex-col md:flex-row md:items-center md:justify-between sticky bottom-0 w-full z-50 shadow-lg">
  <ul className="flex flex-wrap gap-6">
    {Object.keys(categories).map((category) => (
      <li
        key={category}
        className="relative group cursor-pointer"
        onMouseEnter={() => setDropdownOpen(category)}
        onMouseLeave={() => setDropdownOpen(null)}
      >
        <span className="hover:text-green-300 transition duration-300">{category}</span>
        <AnimatePresence>
          {dropdownOpen === category && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-6 left-0 bg-white rounded-lg shadow-xl w-48 z-50 overflow-hidden"
            >
              <div className="bg-green-600 text-white px-4 py-2 font-semibold">{category}</div>
              {categories[category]?.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    ))}
  </ul>

  {/* Search Input */}
  <div className="relative mt-3 md:mt-0">
    <input
      type="text"
      placeholder="Search"
      className="px-4 py-2 w-48 rounded-full text-black outline-none border border-gray-300 focus:border-green-500 transition duration-300"
    />
    <Search
      className="absolute right-3 top-2 text-gray-600 cursor-pointer hover:text-green-600 transition duration-300"
      size={20}
    />
  </div>
</div>

    </nav>
  );
};

export default Navbar;
