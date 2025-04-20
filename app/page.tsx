"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCart } from "../components/CartContext";
import Image from "next/image";
import bdMap from "@/assets/images/bd-map.png";

export default function Home() {
  useGSAP(() => {
    // Animate hero elements on page load
    const tl = gsap.timeline();
    tl.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".hero-description",
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .from(
        ".hero-button",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.6"
      );
  }, []);

  // Item fade-in animation for features and categories
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  // Sample featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Hand-woven Jamdani Saree",
      category: "textiles",
      price: 249.99,
      image: "/jamdani.jpg",
    },
    {
      id: 2,
      name: "Brass Decorative Plate",
      category: "home-decor",
      price: 79.99,
      image: "/brass-plate.jpg",
    },
    {
      id: 3,
      name: "Terracotta Tea Set",
      category: "home-decor",
      price: 89.99,
      image: "/tea-set.jpg",
    },
  ];

  // Import cart context and add to cart functionality
  const { addToCart } = useCart();

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
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="w-full min-h-screen flex flex-col items-center justify-center my-20">
        <div className="relative">
          <Image src={bdMap} alt="BD Map" width={876} />
          {/* for lg devices */}
          <Link href="/bogurar-doi">
            <button className="max-md:hidden absolute bg-transparent top-[170px] left-52 btn-shine  px-[118px] py-[58px]  border border-transparent rounded-[18px]  text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]"></button>
          </Link>

          {/* for sm devices */}
          <Link href="/bogurar-doi">
            <button className="md:hidden absolute bg-transparent top-[70px] left-20 px-[80px] py-[50px]  border border-transparent rounded-[18px]  text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]"></button>
          </Link>
        </div>
        <div className="mb-20 mt-40 max-sm:flex flex-wrap gap-2 items-center justify-center space-y-2">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button className=" btn-shine relative px-[105px] py-[51px] border border-[rgba(22,76,167,0.6)] rounded-[10px] bg-white text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span className="relative z-20 text-[#164ca7] text-[22px] font-medium tracking-[0.7px]">
                Button 1
              </span>
            </button>
            <button className=" btn-shine relative px-[105px] py-[51px] border border-[rgba(22,76,167,0.6)] rounded-[10px] bg-white text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span className="relative z-20 text-[#164ca7] text-[22px] font-medium tracking-[0.7px]">
                Button 2
              </span>
            </button>
            <button className=" btn-shine relative px-[105px] py-[51px] border border-[rgba(22,76,167,0.6)] rounded-[10px] bg-white text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span className="relative z-20 text-[#164ca7] text-[22px] font-medium tracking-[0.7px]">
                Button 3
              </span>
            </button>
          </div>
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <button className=" btn-shine relative px-[105px] py-[51px] border border-[rgba(22,76,167,0.6)] rounded-[10px] bg-white text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span className="relative z-20 text-[#164ca7] text-[22px] font-medium tracking-[0.7px]">
                Button 4
              </span>
            </button>
            <button className=" btn-shine relative px-[105px] py-[51px] border border-[rgba(22,76,167,0.6)] rounded-[10px] bg-white text-[#1d89ff] font-normal uppercase text-sm flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.02,0.01,0.47,1)]">
              <span className="relative z-20 text-[#164ca7] text-[22px] font-medium tracking-[0.7px]">
                Button 5
              </span>
            </button>
          </div>

          {/* <motion.button
            className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="relative z-10">Sign In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="relative z-10">Sign In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="relative z-10">Sign In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="relative z-10">Sign In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white py-2 md:px-3 lg:px-6 rounded-full font-medium whitespace-nowrap shadow-md shadow-[#FF5722]/20 relative overflow-hidden group cursor-pointer md:ml-1 lg:ml-2"
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 20px 0 rgba(255, 87, 34, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
            }}
          >
            <span className="relative z-10">Sign In</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#FF9800] to-[#FF5722] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button> */}
        </div>
      </div>
    </main>
  );
}

// WARNING: THIS IS REQUIRED SO NOT REMOVE IT:
// {
//   /* Hero Section */
// }
// <section className="w-full py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center relative overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 z-[-1]" />
//   <div className="container mx-auto px-4 md:px-6 relative z-10">
//     <div className="flex flex-col items-center text-center">
//       <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
//         Discover Cultural Treasures at{" "}
//         <span className="text-[#FF5722]">Oitijjho Express</span>
//       </h1>
//       <p className="hero-description max-w-3xl text-lg md:text-xl text-gray-600 mb-8">
//         Explore our handcrafted collection celebrating heritage and tradition.
//         From artisanal crafts to luxurious textiles, each piece tells a story.
//       </p>
//       <div className="flex gap-4 hero-button">
//         <Link href="/products">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-orange-300/30 transition-shadow"
//           >
//             Explore Collection
//           </motion.button>
//         </Link>
//         <Link href="/about">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="bg-white text-[#FF5722] border border-[#FF5722] px-8 py-4 rounded-full font-medium hover:bg-[#FF5722]/5 transition-colors"
//           >
//             Our Story
//           </motion.button>
//         </Link>
//       </div>
//     </div>
//   </div>

//   {/* Decorative elements */}
//   <div className="absolute -bottom-16 right-0 w-64 h-64 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full blur-3xl opacity-30" />
//   <div className="absolute top-24 -left-16 w-48 h-48 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20" />
// </section>;

// {
//   /* Featured Products */
// }
// <section className="w-full py-16 bg-white">
//   <div className="container mx-auto px-4 md:px-6">
//     <div className="flex flex-col items-center mb-12">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//         Featured Products
//       </h2>
//       <div className="w-16 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] rounded-full mb-4"></div>
//       <p className="text-gray-600 text-center max-w-2xl">
//         Discover our most popular handcrafted treasures, each item telling a
//         unique cultural story.
//       </p>
//     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {featuredProducts.map(product => (
//         <motion.div
//           key={product.id}
//           custom={product.id}
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true, margin: "-50px" }}
//           className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
//         >
//           <div className="h-60 bg-gray-200 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20" />
//           </div>
//           <div className="p-6">
//             <h3 className="text-xl font-semibold text-gray-900 mb-2">
//               {product.name}
//             </h3>
//             <p className="text-gray-600 mb-4">
//               Handcrafted with traditional techniques and premium materials.
//             </p>
//             <div className="flex justify-between items-center">
//               <span className="text-[#FF5722] font-bold">${product.price}</span>
//               <button
//                 className="text-[#FF5722] hover:text-[#FF9800] font-medium"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>

//     <div className="flex justify-center mt-12">
//       <Link href="/products">
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           className="text-[#FF5722] border border-[#FF5722] px-6 py-3 rounded-full font-medium hover:bg-[#FF5722]/5 transition-colors"
//         >
//           View All Products
//         </motion.button>
//       </Link>
//     </div>
//   </div>
// </section>;

// {
//   /* Newsletter Section */
// }
// <section className="w-full py-16 bg-orange-50">
//   <div className="container mx-auto px-4 md:px-6">
//     <div className="max-w-3xl mx-auto text-center">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//         Join Our Community
//       </h2>
//       <p className="text-gray-600 mb-8">
//         Subscribe to our newsletter to receive updates on new products, cultural
//         stories, and exclusive offers.
//       </p>
//       <div className="flex flex-col sm:flex-row gap-3 justify-center">
//         <input
//           type="email"
//           placeholder="Your email address"
//           className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-[#FF5722] flex-grow max-w-md"
//         />
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.98 }}
//           className="bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white px-6 py-3 rounded-full font-medium shadow-md"
//         >
//           Subscribe
//         </motion.button>
//       </div>
//     </div>
//   </div>
// </section>;
