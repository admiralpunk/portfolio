import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card group"
    >
      <div className="relative h-[250px] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
        <img
          src={project.image}
          alt={project.title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
        <div className="flex items-center gap-3">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-vibrantBlue hover:text-vibrantGreen transition-colors"
            >
              Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-secondary transition-colors"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <p className="text-textSecondary mb-4">{project.description}</p>
      <p className="text-sm mb-4">Tech Stack: {project.techStack}</p>
      <h4 className="font-semibold mb-2">Key Features:</h4>
      <ul className="list-disc list-inside text-textSecondary">
        {project.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;