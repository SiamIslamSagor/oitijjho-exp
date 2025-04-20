"use client";

import React, { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";

const CartButton: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const controls = useAnimation();

  // Animate the button when items are added
  useEffect(() => {
    if (totalItems > 0) {
      controls.start({
        scale: [1, 1.2, 1],
        transition: { duration: 0.5, times: [0, 0.3, 0.5] },
      });
    }
  }, [totalItems, controls]);

  return (
    <motion.button
      onClick={() => setIsCartOpen(true)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={controls}
      className="relative bg-white border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:border-[#FF5722]/50 transition-colors focus:outline-none"
      aria-label="Open cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FF5722"
        strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>

      <AnimatePresence>
        {totalItems > 0 && (
          <motion.div
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute -top-2 -right-2 bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
          >
            {totalItems > 99 ? "99+" : totalItems}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CartButton;
