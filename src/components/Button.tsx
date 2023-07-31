import { useState } from 'react';
import {motion} from "framer-motion";

interface ButtonComponentProps{
    bgcolor :string
    text :string
    onClickHandler :() =>void
}


const Button:React.FC<ButtonComponentProps> = ({bgcolor,text,onClickHandler})=> {
    
    return(
        <motion.div initial=
        {{opacity :0}} 
        animate = {{opacity:1}}
        transition={{duration:0.5}}
        >
             <button onClick={onClickHandler} className={`${bgcolor} text-xl p-4 rounded-lg font-medium` } >
                {text}
            </button>
        </motion.div>
    )


}

export default Button  