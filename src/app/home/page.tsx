"use client";
import Button from "../../components/Button";
import Matrix from "../../components/Matrix";
import {useContext,useState,useEffect} from "react";
import PageWrapper from "@/components/PageWrapper";
import {motion as m} from "framer-motion"
import CircleButton from "@/components/CircleButton";
import AnimatedText from "@/components/AnimatedText";
import { ClickContext } from "@/contexts/ClickContext";
import { ButtonProvider } from '../../contexts/ButtonContext';
import ShowOnClick from "@/components/ShowOnClick";
import AppConstants from "@/constants/AppConstants";
const Home = ()=>{


    const {clicked} = useContext(ClickContext); // Context wala clicked
    const [click, setClick] = useState(false);
    const  handleClick = ()=>{
        console.log(click);
        if(!clicked)
            setClick(true);
    }

    
    return(
        <>
        <PageWrapper >
    <m.div
    initial={{opacity:1}}
    animate={{x:"0%"}}
    transition={{duration:0.75, ease:"easeInOut"}}  
    
    >
       <Matrix></Matrix>
       <ButtonProvider>
    <div className="flex" id="home">
        <div className="flex items-center h-screen w-screen justify-center flex-col">
            <Button onClickHandler={handleClick}  bgcolor="bg-green-950 " text="Matrix welcomes you"></Button>
            <div>
            <div className="flex justify-between">
            <CircleButton  bgcolor={AppConstants.RED_VAR_COLOR} color = {AppConstants.RED}></CircleButton>
            <CircleButton bgcolor={AppConstants.BLUE_VAR_COLOR} color = {AppConstants.BLUE}></CircleButton>

            </div>
            </div>
            <div>
             {click && <AnimatedText text="Make a choice" color="text-white-800" />}
            </div>
            <div>
             <ShowOnClick/>
            </div>
        </div>
    </div>
    </ButtonProvider>
    </m.div>
    </PageWrapper>
    </>
    )
}

export default Home;