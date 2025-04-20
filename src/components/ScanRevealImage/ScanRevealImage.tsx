"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ScanRevealImage = ({ src, alt, delay=0, onComplete }: { src: string; alt: string; delay?: number, onComplete?: ()=>void }) => {
  const [canLoad, setCanLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanLoad(true), delay); // Delay image loading
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="relative  max-w-lg h-auto overflow-hidden border border-green-500">
      {canLoad && (
        <>
          {/* Image with Fade-in Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={src}
              alt={alt}
              width={500}
              height={300}
              className="w-full object-cover"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>

          {/* Green Scanner Effect */}
          {isLoaded && (
            <motion.div
              className="absolute left-0 w-full h-1 bg-green-500 shadow-[0_0_15px_4px_rgba(0,255,0,0.8)]"
              initial={{ top: "-5%" }}
              animate={{ top: "105%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ScanRevealImage;
