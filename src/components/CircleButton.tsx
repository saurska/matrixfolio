import React, {useState, useContext } from 'react';
import {easeOut, motion} from "framer-motion"
import {ButtonContext} from "../contexts/ButtonContext"
import {ClickContext} from "../contexts/ClickContext"
import { useRouter } from 'next/navigation';
import AppConstants from '@/constants/AppConstants';

// import { ColorContext } from '../contexts/ColorContext.'

interface CircleButtonComponentProps{
  bgcolor :string
  color:string
}
const CircleButton:React.FC<CircleButtonComponentProps> = ({bgcolor,color}) => {
  const router = useRouter();

  // const {hidden, setButton} = useContext(ButtonContext);
  const {clicked, setClick } = useContext(ClickContext);

  // const [hideButton, setHideButton] = useState(false);
 

  const hideIt = () =>{
    if(color=="blue")
      router.push(AppConstants.BLUE_PILL_URL)
    else if(color =="red"){
        router.push(AppConstants.RED_PILL_URL)
    }
  }



  return (
    <div>
      {(clicked && color=="blue") ? (<motion.button 
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 0 }}
    exit={{opacity: 0}}
    transition={{ duration: 0.8, ease:"easeOut" }}
    className={`${bgcolor} rounded-full w-10 h-6 mx-5 my-3 shadow-md transition-transform transform hover:scale-110`}>
         
    </motion.button>): ( <motion.button 
    onClick={hideIt} 
    className={`${bgcolor} rounded-full w-10 h-6 mx-5 my-3 shadow-md transition-transform transform hover:scale-110`}>
         
    </motion.button>)}


    </div>
  )
}

export default CircleButton
