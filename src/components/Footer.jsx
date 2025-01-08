import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-theme bg-no-repeat bg-cover bg-center py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="mailto:aniketkolte79@gmail.com" className="nav-link">
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aniketkolte79"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/admiralpunk"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <FaGithub size={24} />
            </a>
          </div>
          <p className="text-textSecondary text-sm">
            © 2024 Aniket Kolte. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
