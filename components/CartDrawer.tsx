"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart, CartItem } from "./CartContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
  } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close the drawer when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isCartOpen, setIsCartOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  useGSAP(() => {
    if (isCartOpen) {
      const tl = gsap.timeline();
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      ).fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );
    }
  }, [isCartOpen]);

  // Drawer animations
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "ease",
        duration: 0.3,
      },
    },
  };

  // Overlay animations
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  // Empty cart animation
  const emptyCartVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Cart item animations
  const cartItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 },
    },
    removed: {
      opacity: 0,
      x: 100,
      transition: { duration: 0.3 },
    },
  };

  // Format price
  const formatPrice = (price: number): string => {
    return price.toFixed(2);
  };

  const CartItemComponent = ({
    item,
    index,
  }: {
    item: CartItem;
    index: number;
  }) => {
    const [isRemoving, setIsRemoving] = React.useState(false);

    const handleRemove = () => {
      setIsRemoving(true);
      setTimeout(() => {
        removeFromCart(item.id);
      }, 300);
    };

    return (
      <motion.div
        layout
        custom={index}
        variants={cartItemVariants}
        initial="hidden"
        animate={isRemoving ? "removed" : "visible"}
        exit="exit"
        className="flex gap-4 p-4 border-b border-gray-100"
      >
        {/* Item image */}
        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-orange-300/20 to-orange-500/20"></div>
        </div>

        {/* Item details */}
        <div className="flex-grow">
          <h4 className="font-medium text-gray-900">{item.name}</h4>
          <p className="text-sm text-gray-500 capitalize mb-2">
            {item.category.replace("-", " ")}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center border border-gray-200 rounded-full">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FF5722] focus:outline-none"
              >
                -
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-gray-700">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FF5722] focus:outline-none"
              >
                +
              </button>
            </div>

            <p className="font-semibold text-[#FF5722]">
              ${formatPrice(item.price * item.quantity)}
            </p>
          </div>
        </div>

        {/* Remove button */}
        <button
          onClick={handleRemove}
          className="text-gray-400 hover:text-[#FF5722] h-6 w-6 flex items-center justify-center focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 overflow-hidden"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Drawer header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                Your Cart
                <span className="ml-2 px-2 py-0.5 bg-[#FF5722]/10 text-[#FF5722] text-sm rounded-full">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Cart content */}
            <div className="h-[calc(100vh-240px)] overflow-y-auto">
              {cart.length === 0 ? (
                <motion.div
                  variants={emptyCartVariants}
                  initial="initial"
                  animate="animate"
                  className="h-full flex flex-col items-center justify-center p-6 text-center"
                >
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="#FF5722"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsCartOpen(false)}
                    className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-3 px-6 rounded-full font-medium shadow-md"
                  >
                    Explore Products
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div layout className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {cart.map((item, index) => (
                      <CartItemComponent
                        key={item.id}
                        item={item}
                        index={index}
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </div>

            {/* Drawer footer */}
            {cart.length > 0 && (
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-700 font-medium">Subtotal</span>
                  <span className="text-xl font-semibold text-gray-900">
                    ${formatPrice(totalPrice)}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-orange-300/30 transition-shadow"
                >
                  Checkout
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
