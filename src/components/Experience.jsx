import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Stealth Startup',
    role: 'Backend Intern',
    date: 'February 2025 – Present',
    techStack: 'Kubernetes, AWS, FastAPI',
    responsibilities: [
      'Deployed and managed Kubernetes workloads to ensure scalable and reliable application infrastructure',
      'Worked with AWS services to optimize cloud-based deployments and system performance',
      'Developed and maintained backend services using FastAPI, enabling high-performance API interactions',
      'Integrated Kafka for real-time event streaming and Redis for efficient caching and message brokering'
    ]
  },
  {
    company: 'ZenStudy',
    role: 'Backend Developer Intern',
    date: 'December 2024 - Present',
    techStack: 'Next.js, JavaScript',
    responsibilities: [
      'Building backend infrastructure for a video streaming platform',
      'Implementing DRM solutions for secure video content',
      'Developing RESTful APIs for platform features'
    ]
  },
  {
    company: 'Fluxvisio Tech',
    role: 'Database/Backend Intern',
    date: 'August 2024 - October 2024',
    techStack: 'Node.js, Express, JavaScript',
    responsibilities: [
      'Designing database schemas',
      'Using Prisma ORM for database management',
      'Integrating WebSockets for real-time communication'
    ]
  },
  {
    company: 'Arham Group',
    role: 'Freelance Developer',
    date: 'June 2024 - July 2024',
    techStack: 'Node.js, Express, Flutter',
    responsibilities: [
      'Developed an app for affordable notebook distribution',
      'Implemented features for user registration and order management'
    ]
  }
];


const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card mb-8"
            >
              <h3 className="text-xl font-bold text-secondary">{exp.company}</h3>
              <h4 className="text-lg font-semibold mb-2">{exp.role}</h4>
              <p className="text-textSecondary mb-2">{exp.date}</p>
              <p className="text-sm mb-4">Tech Stack: {exp.techStack}</p>
              <ul className="list-disc list-inside text-textSecondary">
                {exp.responsibilities.map((resp, i) => (
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

export default Experience;
