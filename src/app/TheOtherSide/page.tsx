"use client"
import { motion as m } from "framer-motion"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { useState } from "react"

const TheOtherSide = () => {
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <PageWrapper>
      <m.div
        className="max-w-screen-xl mx-auto px-4 p-4"
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <Navbar />

        {/* Blue Pill - Focus on Blogs and Philosophy */}
        <div className="md:flex flex-wrap pt-24 md:pt-32">
          {/* Left Panel - Focused on Blogs or Philosophy */}
          <div className="flex flex-col md:w-1/2 w-full px-6 mb-12 md:mb-0">
            <m.h2
              className="text-3xl font-bold text-center mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
              <span className="text-white">Philosophy </span>
              <span className="text-green-400">& Blogs 📖</span>
            </m.h2>

            <p className="text-lg leading-relaxed mb-6">
              Explore my thoughts, musings, and reflections on various topics. I share my journey, lessons learned, and perspectives in my blogs.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Dive into the pursuit of happiness and other insights I’ve captured in my writing.
            </p>
          </div>

          {/* Right Panel - Blogs */}
          <div className="flex flex-col md:w-1/2 w-full px-6">
            {showBlogs && (
              <>
                <m.h2
                  className="text-3xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                >
                  <span className="text-white">Recent </span>
                  <span className="text-green-400">Blogs 📖</span>
                </m.h2>

                <div className="space-y-4">
                  <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">Are we happy enough?</h3>
                    <p className="text-gray-400 mb-4">A deep dive into the pursuit of happiness.</p>
                    <a
                      href="https://saurska.blogspot.com/2021/06/search-for-happiness.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      Read More
                    </a>
                  </div>

                  {/* You can add more blogs here */}
                </div>
              </>
            )}
          </div>
        </div>
      </m.div>
    </PageWrapper>
  )
}

export default TheOtherSide
