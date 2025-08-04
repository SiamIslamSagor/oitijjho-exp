"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "../../components/CartContext";
import { useSearchParams } from "next/navigation";
import { products } from "../../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart } = useCart();
  const searchParams = useSearchParams();

  // Set initial category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter products based on active category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter(product => product.category === activeCategory);

  // Sort products based on sortBy selection
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "featured")
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    return 0;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <main className="min-h-screen py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our Products
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Discover our collection of handcrafted items that celebrate cultural
            heritage and artisanal craftsmanship.
          </motion.p>
        </div>

        {/* Filter and sort controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveCategory("fruits-and-flavors")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "fruits-and-flavors"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Fruits and Flavors
            </button>
            <button
              onClick={() => setActiveCategory("weaves-and-textiles")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "weaves-and-textiles"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Weaves and Textiles
            </button>
            <button
              onClick={() => setActiveCategory("handcrafted-heritage")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "handcrafted-heritage"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Handcrafted Heritage
            </button>
            <button
              onClick={() => setActiveCategory("regional-specialties")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "regional-specialties"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Regional Specialties
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Product grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {sortedProducts.map(product => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <Link href={`/products/${product.slug}`} className="block">
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20" />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-[#FF5722] text-white text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
              </Link>
              <div className="p-6">
                <Link href={`/products/${product.slug}`} className="block">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-[#FF5722] transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 capitalize mb-2">
                  {product.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-[#FF5722] font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  <motion.button
                    className="bg-white text-[#FF5722] border border-[#FF5722] px-3 py-1 rounded-full text-sm font-medium hover:bg-[#FF5722]/5 transition-colors"
                    onClick={() => handleAddToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
