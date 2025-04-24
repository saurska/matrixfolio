"use client";

import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";
import AnimatedSection from "@/components/AnimatedSectionContainer/AnimatedSection";
import AppConstants from "@/constants/AppConstants";
import BlogLink from "@/components/BlogLinkContainer/BlogLinkComponent";
import CircleButton from "@/components/CircleButton";

const BluePillIntro = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const opacityIntro = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scaleIntro = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  const opacitySpace = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const scaleSpace = useTransform(scrollYProgress, [0.2, 0.6], [1.2, 1]);
  
  const opacityWriting = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
  const scaleWriting = useTransform(scrollYProgress, [0.6, 1], [1.2, 1]);

  return (
    <PageWrapper>
      <div ref={targetRef} className="relative w-full">
        {/* Section 1 - Intro */}

        <AnimatedSection backgroundImage= {AppConstants.AnimatedSection[0].backgroundImage}
        title= {AppConstants.AnimatedSection[0].title}
        description= {AppConstants.AnimatedSection[0].description}
        opacity={opacityIntro}
        scale={scaleIntro}
        showNavbar = {true}
        >
          </AnimatedSection>

          {/* Section 2 - Astronomy */}
          <AnimatedSection backgroundImage= {AppConstants.AnimatedSection[1].backgroundImage}
        title= {AppConstants.AnimatedSection[1].title}
        description= {AppConstants.AnimatedSection[1].description}
        opacity={opacitySpace}
        scale={scaleSpace}
        >
          </AnimatedSection>

          <AnimatedSection
  backgroundImage={AppConstants.AnimatedSection[2].backgroundImage}
  title={AppConstants.AnimatedSection[2].title}
  description={AppConstants.AnimatedSection[2].description}
  opacity={opacityWriting}
  scale={scaleWriting}
>
<m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="text-center px-6 max-w-3xl mx-auto space-y-6 text-gray-200"
  >
    <div className="flex justify-center py-6 flex-wrap gap-4 mt-6">
    {AppConstants.blogs.map((blog) => (
      <BlogLink
      key = {blog.title}
      title = {blog.title}
      link = {blog.link}
      />
    )
    ) }
      
    </div>

    <blockquote className="mt-auto mb-10 italic text-gray-300 border-l-4 border-blue-500 pt-10 pl-4 text-left">
    “Never forget what you are. The rest of the world will not.
    Wear it like armor, and it can never be used to hurt you.”
    <p className="mt-2 text-gray-400 text-sm text-right">— Tyrion Lannister</p>
  </blockquote>
<CircleButton bgcolor= {AppConstants.RED_VAR_COLOR} color = "red"></CircleButton>
  </m.div>

</AnimatedSection>
      </div>
    </PageWrapper>
  );
};

export default BluePillIntro;
