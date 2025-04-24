"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import Navbar from "../Navbar";

type SectionProps = {
  title: string;
  description: string;
  backgroundImage: string;
  opacity: any;
  scale: any;
  showNavbar ?: boolean;
  children? : React.ReactNode;
};

const AnimatedSection = ({
  title,
  description,
  backgroundImage,
  opacity,
  scale,
  showNavbar = false,
  children,
}: SectionProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <m.div
        style={{ opacity, scale }}
        className="absolute top-0 left-0 w-full h-full z-0"
      >
        <Image
          src={backgroundImage}
          alt="Background Image"
          fill
          className="object-cover"
          priority
        />
      </m.div>
      <div className="relative z-10  max-w-screen-xl mx-auto px-4 p-4" >
      
      {showNavbar && (<Navbar />)}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          style={{ opacity, scale }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-md">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
          {children}
        </m.div>
      </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
