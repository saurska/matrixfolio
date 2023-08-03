import React from 'react'
import Link from 'next/link'
import Social from './Social/Social'
import {GitHub, Linkedin, Mail} from "react-feather"

interface SocialContainerComponentProps{
    // slink :string
    // color:string
  }

const SocialContainer:React.FC<SocialContainerComponentProps> = () => {
  return (
    <div className='w-36'>
    <div className='flex justify-between'>
        <Social slink='https://github.com/saurska'  icon={GitHub}></Social>
        <Social slink='https://www.linkedin.com/in/saurska/' icon={Linkedin}></Social>
        <Social slink='mailto:saurabhagg321@gmail.com' icon={Mail}></Social>
    </div>
    </div>
  )
}

export default SocialContainer
