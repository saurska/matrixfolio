import {motion as m} from "framer-motion"
import {ClickContext} from "../contexts/ClickContext"
import {useState,useContext} from "react"

interface MyAnimatedComponent{
  text:string
  color:string

}
const AnimatedText:React.FC<MyAnimatedComponent> = ({text,color}) => {
  const {clicked} = useContext(ClickContext);
  // const [clicked, setClick] = useState(false);

  // const UpdateClick = ()=>{
  //   setClick(true);
  // }
  
  return (
    <div>
      <m.h1 className={`${color} font-semibold text-shadow-sm`}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={ {opacity:0}}
        transition={{ duration: 1, ease:"easeIn" }}
      >
        {text}
      </m.h1>
    </div>
  )
}

export default AnimatedText
