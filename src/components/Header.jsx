import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
    "Leadership",
  ];

  return (
    <header className="fixed w-full bg-primary/90 backdrop-blur-sm z-50 py-4 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-vibrantGreen">Aniket Kolte</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="nav-link text-textSecondary hover:text-vibrantBlue px-3 py-2"
              >
                {link}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-textSecondary hover:text-vibrantBlue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className="block py-2 text-textSecondary hover:text-vibrantBlue"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
