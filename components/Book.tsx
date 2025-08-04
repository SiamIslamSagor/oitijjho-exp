"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import bookCover from "@/assets/images/cover2.jpg";
import { articles } from "@/data/articles";

interface BookProps {
  onPageContentClick?: (e: React.MouseEvent) => void;
}

export default function Book({ onPageContentClick }: BookProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pages =
      containerRef.current?.querySelectorAll<HTMLDivElement>(".page");
    if (!pages) return;

    pages.forEach((page, i) => {
      if (i % 2 === 0) {
        page.style.zIndex = `${pages.length - i}`;
      }

      // Set page number
      page.setAttribute("data-page-num", `${i + 1}`);

      // Click handler
      page.onclick = function (e) {
        const target = e.target as HTMLElement;

        // ✅ Skip flipping if clicking on interactive content
        if (target.closest(".skip-page-flip, a, button, [role='button']")) {
          return;
        }

        const pageNum = parseInt(page.getAttribute("data-page-num") || "0", 10);

        if (pageNum % 2 === 0) {
          page.classList.remove("flipped");
          if (page.previousElementSibling) {
            page.previousElementSibling.classList.remove("flipped");
          }
        } else {
          page.classList.add("flipped");
          if (page.nextElementSibling) {
            page.nextElementSibling.classList.add("flipped");
          }
        }
      };
    });

    // ✅ Auto-flip first two pages to simulate open book
    if (pages.length > 1) {
      pages[0].classList.add("flipped");
      pages[1].classList.add("flipped");
    }
  }, []);

  const handlePageContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent flipping
  };

  return bookCover ? (
    <div className="z-[10] max-xl:hidden" style={{ perspective: "1000px" }}>
      <div
        ref={containerRef}
        className="book"
        style={{ transform: "rotateX(7.5deg)" }}
      >
        <div id="pages" className="pages">
          {/* Cover Page */}
          <div className="page overflow-hidden">
            <Image
              src={bookCover}
              loading="lazy"
              alt="Book Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Table of Contents */}
          <div className="page p-6 bg-gradient-to-br from-orange-50 to-orange-100">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Stories from Bangladesh
              </h2>
              <div className="space-y-3">
                {articles.slice(0, 8).map((article, index) => (
                  <div key={article.id} className="flex items-center space-x-3">
                    <span className="text-sm text-gray-500 font-mono w-8">
                      {index + 1}.
                    </span>
                    <span className="text-sm text-gray-700 font-medium truncate">
                      {article.title}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Discover the rich heritage and cultural treasures of
                  Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* Article Pages */}
          {articles?.map((article, index) => (
            <div
              key={article.id}
              className="page p-6 bg-white flex flex-col justify-between"
            >
              {/* Top */}
              <div className="flex-1 flex flex-col">
                {/* Article Image - 35% of page height */}
                <div className="h-[35%] relative rounded-lg overflow-hidden mb-4 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/20 to-orange-500/20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/30 to-orange-500/30" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#FF5722] text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                      {article.category}
                    </span>
                  </div>
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-orange-400/30" />
                </div>

                {/* Meta Info */}
                <div className="mb-4">
                  <div className="flex items-center text-xs text-gray-500 space-x-2 mb-2">
                    <span className="flex items-center">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <span className="font-medium">{article.author}</span>
                    <span>•</span>
                    <span className="italic">{article.authorTitle}</span>
                  </div>
                </div>

                {/* Excerpt */}
                <div className="flex-1">
                  <p className="text-sm text-gray-700 leading-relaxed mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 hidden xl:block line-clamp-4">
                    {article.content.slice(0, 300)}...
                  </p>

                  <p className="text-sm text-gray-700 leading-relaxed mb-4 hidden 2xl:block line-clamp-4">
                    {article.content.slice(0, 500)}...
                  </p>

                  {/* Decorative separator */}
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FF5722] to-[#FF9800] mb-4 rounded-full" />
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {/* Button */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="skip-page-flip inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#FF5722] to-[#FF9800] text-white text-sm font-medium rounded-lg hover:from-[#FF9800] hover:to-[#FF5722] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                  onClick={handlePageContentClick}
                >
                  Read Full Story
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>

                {/* Page Number */}
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-1 rounded">
                    {index + 3}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Back Cover */}
          <div className="page overflow-hidden">
            <Image
              src={bookCover}
              loading="lazy"
              alt="Back Cover"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
