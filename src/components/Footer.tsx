import clsx from 'clsx';

const Footer: React.FC = () => {
  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/mahmoud-yousefi', icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.564 9.564 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.94.68 1.9v2.81c0 .27.18.58.69.48A10.007 10.007 0 0022 12c0-5.52-4.48-10-10-10z" /></svg> },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mahmood-yoosefi-1586a526b/', icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v7.5a6 6 0 0012 0V8zM4 8v7.5a4.5 4.5 0 009 0V8a4.5 4.5 0 00-9 0zm10.5 7.5a3 3 0 100-6 3 3 0 000 6zM15 6h6m-3 3h3m-3 3h3m-3 3h3" /></svg> },
    { label: 'WhatsApp', url: 'https://wa.me/09902635947', icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3.29 2.47a4.5 4.5 0 006.42 0L21 8m-2 11h-2a2 2 0 01-2-2v-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V17a1 1 0 001 1h1a1 1 0 001-1v-7.5a4.5 4.5 0 00-9 0v7.5a4.5 4.5 0 004.5 4.5h4.5" /></svg> },
    { label: 'Telegram', url: 'https://t.me/UsefiMf14', icon: <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.88 2.15a1 1 0 00-1.12-.38l-18 6.75a1 1 0 00-.08 1.83l4.5 2.25a1 1 0 001.15-.13l8.25-7.5a.5.5 0 01.7.7l-7.5 8.25a1 1 0 00-.13 1.15l2.25 4.5a1 1 0 001.83-.08l6.75-18a1 1 0 00-.55-1.34z" /></svg> },
  ];

  return (
    <footer
      className={clsx(
        'bg-gradient-to-t from-gray-900 via-gray-800 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950',
        'text-white py-8 sm:py-10 lg:py-12 relative overflow-hidden font-inter'
      )}
    >
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.2)_0%,transparent_70%)] opacity-50"
        style={{ animation: 'gradientShift 30s ease infinite' }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
        <p
          className={clsx(
            'text-base sm:text-lg md:text-xl font-semibold text-gray-200 dark:text-gray-300 mb-6 sm:mb-8',
            'animate-[fadeInUp_0.8s_ease-out]'
          )}
          style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
        >
          Empowering the future through innovative web and geospatial solutions.
        </p>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {socialLinks.map(({ label, url, icon }) => (
            <li key={label} className="group">
              <a
                href={url}
                className={clsx(
                  'flex items-center space-x-2 text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300',
                  'text-sm sm:text-base font-medium transition-all duration-300'
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Mahmoud Yousefi's ${label} profile`}
              >
                {icon}
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
        <p
          className={clsx(
            'text-sm sm:text-base text-gray-400 dark:text-gray-500',
            'animate-[fadeInUp_1s_ease-out]'
          )}
        >
          © {new Date().getFullYear()} Mahmoud Yousefi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;