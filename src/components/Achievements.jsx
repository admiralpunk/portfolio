import { motion } from 'framer-motion';
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
const achievements = {
  'Competitive Programming': [
    'ACM ICPC: AIR 65 in Chennai Regionals, 1st in college during prelims 2023',
    'Qualified for ACM ICPC Kanpur and Amritapuri Regionals 2024'
  ],
  'Global Rankings': [
    'Expert (Rating 1711) on Codeforces (Top 1.7% globally)',
    '5* Rated (2035) on CodeChef (Top 1% globally)',
    'Google KickStart: Rank 730/8100+ in 2022 Round G'
  ]
};

const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Achievements</h2>
        <div className="max-w-4xl mx-auto">
          {Object.entries(achievements).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="card mb-8"
            >
              <h3 className="text-xl font-bold text-secondary mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-textSecondary">{item}</span>
                    {item.includes("Codeforces") && (
                      <a
                        href="https://codeforces.com/profile/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2"
                      >
                        <SiCodeforces className="text-vibrantBlue" size={20} />
                      </a>
                    )}
                    {item.includes("CodeChef") && (
                      <a
                        href="https://www.codechef.com/users/your_username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2"
                      >
                        <SiCodechef className="text-vibrantBlue" size={20} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;