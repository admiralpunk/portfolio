import { motion } from 'framer-motion';

const skillCategories = {
  Languages: ['C', 'C++', 'Python', 'Java', 'SQL', 'Dart'],
  Databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
  'Frameworks/Technologies': ['Node.js', 'Express.js', 'Google Firebase'],
  Tools: ['VS Code', 'Eclipse', 'Android Studio']
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;