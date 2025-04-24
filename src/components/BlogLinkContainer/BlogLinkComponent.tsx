interface BlogLinkProps{
    title : string,
    link : string
}

const BlogLink = ({
    title, link
}: BlogLinkProps) =>{


    return (<a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-xl border border-gray-500 bg-white/10 backdrop-blur-sm text-blue-100 hover:bg-white/20 hover:text-blue-100 transition duration-300 text-sm sm:text-base"
    >
    {title}
    </a>);
}

export default BlogLink;