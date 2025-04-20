"use client"
import { motion as m } from "framer-motion"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import AppConstants from "@/constants/AppConstants"
import TypingEffect from "@/utilities/TypingEffect"
import SkillCategory from "@/components/SkillCategoryContainer/SkillCategory"
import { useState } from "react"
import ProjectCard from "@/components/ProjectContainer/ProjectCard"
import Matrix from "@/components/Matrix"

const Intro = () => {
  const [showSkills, setShowSkills] = useState(true)

  return (
    <PageWrapper>
     
      <m.div
        className="max-w-screen-xl mx-auto px-4 p-4"
        initial={{ x: "-120%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
      >
        <Navbar />

        {/* Intro + Skills Section */}
        <div className="md:flex flex-wrap pt-24 md:pt-32">
          {/* Left Panel */}
          <div className="flex flex-col  md:w-1/2 w-full px-6 mb-12 md:mb-0">
            <TypingEffect typeSpeed={AppConstants.TYPE_SPEED}>
              <div className="mb-4">
                <h1 className="font-bold text-4xl">
                  {AppConstants.WELCOME_HEADING_H1[0]}{" "}
                  <span className="text-green-700">{AppConstants.WELCOME_HEADING_H1[1]}</span>
                </h1>
              </div>

              <p className="text-lg leading-relaxed">
                {AppConstants.WELCOME_MESSAGE_P1}{" "}
                <span className="text-green-600">{AppConstants.AUTHOR_NAME}</span>
                {AppConstants.WELCOME_MESSAGE_P2}
              </p>
            </TypingEffect>
          </div>

          {/* Right Panel */}
          
          <div className="flex flex-col md:w-1/2 w-full px-6">
            
            {showSkills && (
              <>
                <m.h2
                
                  className="text-3xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 5.5 }}
                >
                  <span className="text-white">Skill </span>
                  <span className="text-green-400">Gems 💎</span>
                </m.h2>

                <m.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                       initial={{ opacity: 0, y: -20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.6, ease: "easeOut", delay: 5.5 }}>
                  
                  {AppConstants.categories.map((cat) => (
                    <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />
                  ))}
                </m.div>
              </>
            )}
          </div>
        </div>

        {/* Project Vault Section */}
        <m.div
          className="w-full flex flex-col items-center px-6 mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut",delay: 5.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            <span className="text-white">Project </span>
            <span className="text-green-400">Vault 🚀</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-6xl">
            {AppConstants.projects.map((proj) => (
              <ProjectCard
                key={proj.title}
                title={proj.title}
                description={proj.description}
                tech={proj.tech}
                link={proj.link}
              />
            ))}
           
          </div>
        </m.div>
      </m.div>
    </PageWrapper>
  )
}

export default Intro
