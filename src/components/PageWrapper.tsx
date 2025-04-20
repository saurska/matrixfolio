"use client";
import React, { ReactNode } from 'react';
// import Matrix from './Matrix';
import { AnimatePresence, motion as m} from "framer-motion"


interface PageWrapperProps {
    children: ReactNode;
    
  }
  const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
   
    <AnimatePresence mode='wait'>

    {children}
   
    </AnimatePresence>
    </>
  )
}

export default PageWrapper
