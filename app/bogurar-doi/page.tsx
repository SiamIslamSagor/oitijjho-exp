"use client";

import bogurarDoi from "@/assets/images/bogurar-doi.jpg";
import { useCart } from "@/components/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";

const page = () => {
  const { addToCart } = useCart();

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    addToCart({
      //   id: product.id,
      //   name: product.name,
      //   price: product.price,
      //   image: product.image,
      //   category: product.category,
      id: 33,
      name: "বগুড়ার দই",
      price: 100,
      image: "/bogurar-doi.jpg",
      category: "দই",
    });
  };

  return (
    <div className="my-40">
      <div className="flex flex-col lg:flex-row container mx-auto">
        <div className="w-full lg:w-1/2">
          <Image src={bogurarDoi} alt="bogurar doi" width={650} height={650} />
        </div>
        <div className="w-full lg:w-1/2">
          {/* details */}
          <div className="flex flex-col gap-4 max-lg:mt-10">
            <h3 className="text-5xl">বগুড়ার দই</h3>
            <h5 className="text-3xl">
              বগুড়ার খাঁটি দই - ঐতিহ্য এবং স্বাদের <br /> এক অনন্য সংমিশ্রণ
            </h5>
          </div>
          <div className="flex flex-col gap-4 space-y-4">
            <h3 className="text-3xl">৳ 100</h3>
            <div>
              <motion.button
                className="bg-white text-[#FF5722] border border-[#FF5722] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#FF5722]/5 transition-colors"
                onClick={() =>
                  handleAddToCart({
                    id: 1,
                    name: "Hand-woven Jamdani Saree",
                    category: "textiles",
                    price: 249.99,
                    image: "/jamdani.jpg",
                    featured: true,
                    slug: "jamdani",
                  })
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
          <div>
            <p className="text-2xl mt-5 md:mt-10">
              বগুড়ার দই বাংলাদেশের ঐতিহ্যবাহী মিষ্টি খাবারের মধ্যে অন্যতম। এই
              দই তার ঘন এবং মসৃণ টেক্সচার, মিষ্টতার নিখুঁত ভারসাম্য এবং খাঁটি
              দুধের স্বাদে বিখ্যাত। এটি সম্পূর্ণ প্রাকৃতিক উপায়ে প্রস্তুত,
              যেখানে কোনো প্রকার কৃত্রিম সংযোজন বা প্রিজারভেটিভ ব্যবহার করা হয়
              না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
