"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface BadgePopupProps {
  image: string;
  title: string;
  description?: string;
  onClose: () => void;
}

export default function BadgePopup({ image, title, description, onClose }: BadgePopupProps) {
  const [closing, setClosing] = useState(false);

  // Handle smooth close animation
  const handleClose = () => {
    setClosing(true);
    setTimeout(onClose, 300); // Delay to match animation duration
  };

  return (
    <div 
      className={`fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-sm 
      ${closing ? "animate-fadeOut" : "animate-fadeIn"}`} 
      onClick={handleClose} 
    >
      <div 
        className={`relative bg-black border border-green-500 p-6 rounded-lg shadow-lg w-[90%] max-w-md text-green-400 font-mono transition-all 
        ${closing ? "animate-fadeOutScale" : "animate-fadeInScale"}`}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Green Glowing Effect */}
        <div className="absolute inset-0 bg-green-500 opacity-10 blur-xl "></div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-green-500 hover:text-red-500 transition-all duration-300"
          onClick={handleClose}
        >
          <FaTimes size={24} />
        </button>

        {/* Popup Content */}
        <div className="flex flex-col items-center text-center relative z-10">
          <img src={image} alt={title} className="rounded-full h-16 mb-2 border-2 border-green-500 shadow-green-500 shadow-md" />
          <h2 className="text-xl font-semibold text-green-300 tracking-wider">{title}</h2>
          {description && <p className="text-green-400 text-center mt-2">{description}</p>}
        </div>
      </div>
    </div>
  );
}
