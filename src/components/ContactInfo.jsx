import { contacts } from '../data/contacts';
import { getContactIcon } from '../utils/icons';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {contacts.map((contact, index) => (
        <a
          key={index}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 text-textSecondary hover:text-secondary transition-colors p-3 rounded-lg border border-gray-700 hover:border-secondary"
        >
          <span className="text-secondary">{getContactIcon(contact.type)}</span>
          <span>{contact.label}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;