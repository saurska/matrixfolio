import Link from "next/link"
import {GitHub} from "react-feather";
import SocialContainer from "./SocialContainer/SocialContainer"
const Navbar = () => {
  return (
    <div className="flex justify-between mt-6">

    <Link href="/home" className="font-semi-bold">
      MatrixFolio 
      </Link>
      {/* <Link href='/home'>
      <h1 className=" text-white"> <GitHub/>
</h1> 
      </Link> */}
      {/* <Link href='/'>
      <h1 className=" text-white">I am navbar</h1> 
      </Link> */}
    <SocialContainer></SocialContainer>
    </div>
  )
}

export default Navbar
