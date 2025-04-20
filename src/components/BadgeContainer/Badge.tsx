"use client";

import { useState } from "react";
import BadgePopup from "./BadgePopup"; // Import the popup

interface BadgeProps {
  image: string;
  title: string;
  description?: string;
}

export default function Badge({ image, title, description }: BadgeProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Badge */}
      <div
        className="flex flex-col items-center px-3 py-1 text-white rounded-full font-semibold cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image}
          alt={title}
          className="rounded-full h-8 transition-all duration-300 drop-shadow-none 
                    hover:drop-shadow-[0_0_10px_rgba(34,197,94,1)] hover:brightness-125"
        />
        <span className="py-2 block">{title}</span>
      </div>

      {/* Open Popup if Clicked */}
      {isOpen && (
        <BadgePopup image={image} title={title} description={description} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
