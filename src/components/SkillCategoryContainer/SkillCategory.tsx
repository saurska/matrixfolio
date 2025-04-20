// components/SkillCategory.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-black border border-green-500 rounded-2xl p-4 w-full cursor-pointer shadow-lg hover:shadow-green-500/50"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout className="text-green-400 text-xl font-bold">
        {title}
      </motion.h2>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="mt-4 pl-4 text-green-300"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {skills.map((skill, index) => (
              <motion.li
                key={skill}
                className="mb-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillCategory;
