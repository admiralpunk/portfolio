import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-full border-4 border-vibrantBlue shadow-xl">
            <img
              src="/aniket.jpeg"
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="text-center md:text-left md:flex-1">
            <h2 className="section-title md:text-left">About Me</h2>
            <p className="text-lg text-textSecondary mb-8">
              I am a passionate Developer with experience in building
              scalable and secure platforms. Skilled in backend technologies,
              databases, and competitive programming, I thrive on solving
              challenges and optimizing systems.
            </p>
            <a href="/resume.pdf" download className="button">
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;