"use client"
import {motion as m} from "framer-motion"
const Intro = () => {
  return (
    <m.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 ,ease:"easeInOut"}}
    >
      Hello this is me
    </m.div>
  )
}

export default Intro
