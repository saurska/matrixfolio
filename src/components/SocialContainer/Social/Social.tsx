import Link from "next/link";


interface SocialComponentProps{
    slink:string
    icon :React.ElementType
}

const Social:React.FC<SocialComponentProps> = ({slink,icon:IconComponent}) => {
  return (
    <button className="rounded-full hover:bg-green-900 mx-2 p-3 transform transition-transform hover:scale-105">
    <Link href={`${slink}`} target="_blank" rel="noopener noreferrer">
    <IconComponent className="icon" />
    </Link>
    </button>
  )
}

export default Social
