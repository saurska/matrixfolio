import {motion as m} from "framer-motion"
import {ClickContext} from "../contexts/ClickContext"
import {useState,useContext} from "react"
import AnimatedText from "./AnimatedText"

const ShowOnClick = () => {
    const {clicked} = useContext(ClickContext);
  return (
    <div>
      {clicked?(<AnimatedText text="Freedom is merely an illusion" color="text-red-800"/>):( null)}
    </div>
  )
}

export default ShowOnClick
