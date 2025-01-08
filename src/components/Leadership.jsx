import { motion } from 'framer-motion';

const roles = [
  {
    title: 'PICT Codechef Chapter',
    position: 'President',
    responsibilities: [
      'Led the club',
      'Organized contests',
      'Managed activities'
    ]
  },
  {
    title: 'PICT ACM Chapter',
    position: 'Domain Director - Competitive Programming',
    responsibilities: [
      'Authored contests',
      'Led discussions with 2000+ participants'
    ]
  }
];

const Leadership = () => {
  return (
    <section id="leadership" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Leadership & Extracurriculars</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-bold text-secondary">{role.title}</h3>
              <h4 className="text-lg font-semibold mb-4">{role.position}</h4>
              <ul className="list-disc list-inside text-textSecondary">
                {role.responsibilities.map((resp, i) => (
                  <li key={i} className="mb-1">{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;