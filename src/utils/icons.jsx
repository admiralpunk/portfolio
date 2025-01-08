import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

export const getContactIcon = (type, size = 20) => {
  const icons = {
    phone: <FaPhone size={size} />,
    email: <FaEnvelope size={size} />,
    linkedin: <FaLinkedin size={size} />,
    github: <FaGithub size={size} />
  };
  
  return icons[type] || null;
};