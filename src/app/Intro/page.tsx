"use client"
import {motion as m} from "framer-motion"
import Navbar from "@/components/Navbar"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation";
import PageWrapper from "@/components/PageWrapper"
// import Matrix from "@/components/Matrix"
const Intro = () => {
  return (
    <PageWrapper >
    <m.div className="max-w-screen-xl mx-auto"
    initial={{x:"-120%", opacity:0}}
    animate={{x:"0%",opacity:1}}
    transition={{duration:0.45, ease:"easeInOut"}}
  
    >
    {/* <Matrix></Matrix> */}
    <Navbar></Navbar>
  <div className=" md:flex" >
                <div className="flex p-10 flex-col items-center justify-center md:w-1/2 w-full md:h-screen">
                  <div className="mb-4">
                    <h1 className="font-bold text-4xl">Unleashing creativity within the <span className=" text-green-700">digital realm</span></h1>
                    </div>

                    <div className="text-lg ">
                    Welcome to my realm, where creativity transcends the boundaries of the mundane, and where I, <span className=" text-green-600">Saurabh Aggarwal</span>, bridge the gap between imagination and reality.
                    </div>
                </div>
                {/* <div className='md:w-1/2  flex flex-col items-center md:justify-center md:h-screen ' >
                <div className=" text-black md:w-96  w-72 mt-8 sm:mt-0">
                    <h1 className="text-4xl my-2">Sign In</h1>
                    <p className="my-2 text-gray-500">Please enter your details to get started</p>
                    <div className='flex justify-between my-2'>
                        <div className='flex'>
                        </div>

                        <div className=''>
                            <button  className='md:w-44 md:h-[42px] bg-[#FF96A5] p-1 w-32 rounded-sm'>
                                Facebook
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center">
                    <hr className='bg-pink-300 md:w-[7.4rem] w-[4.4rem] rounded-sm h-px'/>
                    <span className='mx-3 text-pink-500'>or continue with</span>
                    <hr className='bg-pink-300 md:w-[7.4rem] w-[4.4rem] rounded-sm h-px'/>
                    </div>
                    <label htmlFor="email" className='my-2 '>Email Address</label> <span className="text-pink-600">*</span> 
                    <br />  
                    <input type="email" id="email" name="email" placeholder="Your Email" className='my-2 text-pink-600 p-2 w-full border-2 border-pink-400 rounded-sm outline-none ring-0 placeholder-pink-400'required />
                    <br />
                    <label htmlFor="password" className='my-2'>Password <span className="text-pink-600">*</span></label>
                    <br />
                    <input type="password" name="password" id="password" placeholder="********" className='my-2 text-pink-600 p-2 w-full border-2 border-pink-400 rounded-sm outline-none 'required/>
                    <br />
                    <div className='flex justify-between my-2'>
                    <div className='flex items-center'>
                    <input type="checkbox" name="rememberMe" className='accent-pink-500 ' defaultChecked id="rememberMe" />
                    <label htmlFor="rememberMe" className='text-xs ml-1 text-pink-500' >Remember me</label>
                    </div>
                    </div>
                    <div>
                        <button className='my-2 h-[47px] w-full bg-[#FF597B] text-white rounded-sm'>Sign In</button>
                    </div>

                    </div>
                </div> */}
            </div>

    </m.div>
    </PageWrapper>
  )
}

export default Intro
