import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;