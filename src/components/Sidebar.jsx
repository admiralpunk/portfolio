import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { contacts } from "../data/contacts";
import { getContactIcon } from "../utils/icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "About",
    "Achievements",
    "Experience",
    "Projects",
    "Education",
    "Leadership",
    "Skills",
  ];

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 text-textSecondary hover:text-secondary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 h-screen w-64 bg-primary md:bg-opacity-100 md:translate-x-0 border-r border-gray-800 p-6 flex flex-col z-40 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-secondary mb-8">
            Aniket Kolte
          </h1>

          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="block text-textSecondary hover:text-secondary transition-colors py-2 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-3 pt-6 border-t border-gray-800">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors"
            >
              {getContactIcon(contact.type)}
              <span className="text-sm">{contact.label}</span>
            </a>
          ))}
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
