import clsx from 'clsx';

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/<your-username>' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/<your-username>' },
    { label: 'Twitter', url: 'https://twitter.com/<your-username>' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <ul className="flex justify-center space-x-6">
          {socialLinks.map(({ label, url }) => (
            <li key={label}>
              <a
                href={url}
                className={clsx('text-gray-400 hover:text-blue-400', 'transition-colors')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;