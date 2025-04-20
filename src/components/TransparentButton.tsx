import { useState } from 'react';
import {motion} from "framer-motion";

interface TransparentButtonComponentProps{
    border_color :string
    text :string
    onClickHandler :() =>void
}


const TransparentButton:React.FC<TransparentButtonComponentProps> = ({border_color,text,onClickHandler})=> {
    
    return(
        <motion.div initial=
        {{opacity :0}} 
        animate = {{opacity:1}}
        transition={{duration:0.5}}
        >
             <button onClick={onClickHandler} className={`${border_color} text-xl p-4  border-2 my-5 rounded-none font-medium` } >
                {text}
            </button>
        </motion.div>
    )


}

export default TransparentButton  