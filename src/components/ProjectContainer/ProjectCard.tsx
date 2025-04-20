import { motion as m } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const ProjectCard = ({ title, description, tech, link }: ProjectCardProps) => {
  return (
    <m.div
      className="bg-zinc-900 rounded-2xl p-5 shadow-lg border border-zinc-800 hover:border-green-400 transition-all"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-green-700 text-white rounded-md">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 underline text-sm hover:text-green-300"
        >
          View Project →
        </a>
      )}
    </m.div>
  );
};

export default ProjectCard;
