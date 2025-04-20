"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCart } from "../../components/CartContext";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const { addToCart } = useCart();

  // Mock product data
  const products = [
    {
      id: 1,
      name: "Hand-woven Jamdani Saree",
      category: "textiles",
      price: 249.99,
      image: "/jamdani.jpg",
      featured: true,
      slug: "jamdani",
    },
    {
      id: 2,
      name: "Brass Decorative Plate",
      category: "home-decor",
      price: 79.99,
      image: "/brass-plate.jpg",
      featured: true,
      slug: "brass-plate",
    },
    {
      id: 3,
      name: "Wooden Carved Elephant",
      category: "sculptures",
      price: 149.99,
      image: "/wooden-elephant.jpg",
      featured: false,
      slug: "wooden-elephant",
    },
    {
      id: 4,
      name: "Natural Silk Scarf",
      category: "textiles",
      price: 59.99,
      image: "/silk-scarf.jpg",
      featured: false,
      slug: "silk-scarf",
    },
    {
      id: 5,
      name: "Terracotta Tea Set",
      category: "home-decor",
      price: 89.99,
      image: "/tea-set.jpg",
      featured: true,
      slug: "tea-set",
    },
    {
      id: 6,
      name: "Embroidered Wall Hanging",
      category: "home-decor",
      price: 119.99,
      image: "/wall-hanging.jpg",
      featured: false,
      slug: "wall-hanging",
    },
    {
      id: 7,
      name: "Kantha Stitch Cushion Cover",
      category: "textiles",
      price: 39.99,
      image: "/cushion-cover.jpg",
      featured: false,
      slug: "cushion-cover",
    },
    {
      id: 8,
      name: "Bamboo Handicraft Basket",
      category: "home-decor",
      price: 49.99,
      image: "/basket.jpg",
      featured: false,
      slug: "basket",
    },
  ];

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
    <main className="min-h-screen py-10 px-4">
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
              onClick={() => setActiveCategory("textiles")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "textiles"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Textiles
            </button>
            <button
              onClick={() => setActiveCategory("home-decor")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "home-decor"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Home Decor
            </button>
            <button
              onClick={() => setActiveCategory("sculptures")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "sculptures"
                  ? "bg-[#FF5722] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Sculptures
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
                  {product.category.replace("-", " ")}
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
