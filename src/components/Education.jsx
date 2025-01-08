import { motion } from 'framer-motion';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto card"
        >
          <h3 className="text-2xl font-bold text-secondary mb-2">
            {education.university}
          </h3>
          <p className="text-lg text-textPrimary mb-2">
            {education.degree}
          </p>
          <p className="text-textSecondary mb-4">
            {education.duration} • {education.location}
          </p>
          <div className="space-y-2">
            {education.details.map((detail, index) => (
              <p key={index} className="text-textSecondary">
                • {detail}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;