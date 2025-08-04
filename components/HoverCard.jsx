"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { articles } from "@/data/articles";
import Link from "next/link";
const HoverCard = () => {
  const pathname = usePathname(); // Use Next.js pathname hook
  if (pathname !== "/") {
    return null;
  }

  const shortTitles = articles.map(article => {
    const title = article.title.length > 10
      ? article.title.slice(0, 10) + "…"
      : article.title
    return {
      title,
      slug: article.slug
    }
  });



  return (
    <div className="max-md:hidden card flex gap-[5px] w-[210px] h-[254px] bg-transparent rounded-[4px] p-[0.4em] ">

      {
        shortTitles.slice(0, 3).map((item) => 
        (
          <p key={item.slug} className="card-item">
            <Link href={`/articles/${item.slug}`}>
              <span className="card-label *:!text-white">{item.title}</span>
            </Link>
          </p>
        ))
      }


    </div>
  );
};

export default HoverCard;
