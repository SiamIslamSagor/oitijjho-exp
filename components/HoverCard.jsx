"use client";

import React from "react";
import { usePathname } from "next/navigation";
const HoverCard = () => {
  const pathname = usePathname(); // Use Next.js pathname hook
  if (pathname !== "/") {
    return null;
  }
  return (
    <div className="max-md:hidden card flex gap-[5px] w-[210px] h-[254px] bg-transparent rounded-[4px] p-[0.4em] ">
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
      <p className="card-item">
        <span className="card-label *:!text-white">Hover Me</span>
      </p>
    </div>
  );
};

export default HoverCard;
