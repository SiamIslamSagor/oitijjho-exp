"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { articles, getFeaturedArticle } from "@/data/articles";

export default function Articles() {
  const articlesRef = useRef(null);
  const featuredRef = useRef(null);
  
  const isArticlesInView = useInView(articlesRef, { once: true, margin: "-20%" });
  const isFeaturedInView = useInView(featuredRef, { once: true, margin: "-20%" });
  
  const featuredArticle = getFeaturedArticle();
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50 z-[-1]" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Stories of Heritage
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            Explore the rich tapestry of Bangladeshi culture through stories of artisans, 
            traditions, and the timeless crafts that connect us to our roots.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section ref={featuredRef} className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mb-6"></div>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-orange-50 to-white rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={isFeaturedInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <div className="h-64 lg:h-full bg-gradient-to-br from-orange-300/20 to-orange-500/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-orange-500/30" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF5722] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{featuredArticle.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <Link href={`/articles/${featuredArticle.slug}`} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white font-medium rounded-lg hover:from-[#FF5722]/90 hover:to-[#FF9800]/90 transition-all duration-300 transform hover:scale-105">
                    Read Full Story
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section ref={articlesRef} className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Latest Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-center">
              Dive deeper into the world of Bangladeshi heritage with our curated collection 
              of stories about traditional crafts, cultural practices, and the people who keep them alive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article 
                key={article.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 50 }}
                animate={isArticlesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  delay: index * 0.2 
                }}
              >
                <Link href={`/articles/${article.slug}`}>
                  <div className="h-48 bg-gradient-to-br from-orange-300/20 to-orange-500/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-orange-500/30" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF5722] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-[#FF5722] transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="text-[#FF5722] font-medium hover:text-[#FF9800] transition-colors duration-300 flex items-center">
                      Read More
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {/* <div className="text-center mt-12">
            <button className="inline-flex items-center px-8 py-4 bg-white text-[#FF5722] font-medium rounded-lg border-2 border-[#FF5722] hover:bg-[#FF5722] hover:text-white transition-all duration-300 transform hover:scale-105">
              Load More Stories
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div> */}
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Connected to Heritage
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg">
              Subscribe to our newsletter and be the first to read stories about 
              traditional crafts, artisan interviews, and cultural insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white font-medium rounded-lg hover:from-[#FF5722]/90 hover:to-[#FF9800]/90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
} 