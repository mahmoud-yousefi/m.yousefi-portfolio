import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import myAvatar from '../assets/IMG_20250327_031322_411.webp';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Keyboard support for closing mobile menu and dropdown with Esc
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMenuOpen) setIsMenuOpen(false);
        if (isDropdownOpen) setIsDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);

    // Close dropdown when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) && !navRef.current?.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
      window.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const navItems = [
    { to: '/', label: 'Home', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { to: '/about', label: 'About', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { to: '/skills', label: 'Skills', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { to: '/projects', label: 'Projects', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
    { to: '/resume', label: 'Resume', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { to: '/contact', label: 'Contact', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { to: '/blog', label: 'Blog', icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  ];

  const visibleItems = navItems.slice(0, -1); // All items except the last one for "More" dropdown
  const dropdownItems = [navItems[navItems.length - 1]]; // Only the last item ("Blog") in dropdown initially

  return (
    <header
      className={clsx(
        'bg-gradient-to-r from-blue-800 to-gray-900 dark:from-blue-900 dark:to-gray-950',
        'text-white py-3 sm:py-4 fixed w-full top-0 shadow-xl z-50 font-inter'
      )}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo and Avatar */}
        <NavLink to="/about" className="flex items-center space-x-2 sm:space-x-3 group">
          <img
            src={myAvatar}
            alt="Mahmoud Yousefi"
            className={clsx(
              'w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 object-cover shadow-md',
              'border-blue-200 dark:border-blue-300 group-hover:scale-110 group-hover:shadow-blue-300/50',
              'transition-all duration-300'
            )}
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/40?text=MY')}
          />
          <div
            className={clsx(
              'text-lg sm:text-xl md:text-2xl font-semibold tracking-tight',
              'text-white dark:text-gray-100 group-hover:text-blue-200 dark:group-hover:text-blue-100',
              'transition-colors duration-300'
            )}
          >
            Mahmoud Yousefi
          </div>
        </NavLink>

        {/* Desktop Navigation and Theme Toggle */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <div className="relative">
            <ul ref={navRef} className="hidden md:flex space-x-4 lg:space-x-6 items-center">
              {visibleItems.map(({ to, label, icon }) => (
                <li key={to} className="relative group flex items-center">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wide',
                        isActive
                          ? 'text-blue-300 dark:text-blue-200'
                          : 'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200',
                        'transition-all duration-300'
                      )
                    }
                    aria-label={label}
                  >
                    {icon}
                    <span>{label}</span>
                    <span
                      className={clsx(
                        'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 dark:from-blue-200 dark:to-blue-400',
                        'transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left',
                        { 'scale-x-100': window.location.pathname === to }
                      )}
                    />
                  </NavLink>
                </li>
              ))}
              {navItems.length > 4 && ( // Show "More" dropdown if more than 4 items
                <li className="relative group">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={clsx(
                      'flex items-center space-x-1 text-xs sm:text-sm lg:text-base font-medium uppercase tracking-wide',
                      'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200',
                      'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded'
                    )}
                    aria-label="More navigation items"
                    aria-expanded={isDropdownOpen}
                    aria-controls="dropdown-menu"
                  >
                    <span>More</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <ul
                    ref={dropdownRef}
                    id="dropdown-menu"
                    className={clsx(
                      'absolute right-0 mt-2 w-48 bg-gray-800 dark:bg-gray-900 rounded-md shadow-lg',
                      'flex flex-col space-y-2 py-2 transition-all duration-300',
                      isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                    {dropdownItems.map(({ to, label, icon }) => (
                      <li key={to}>
                        <NavLink
                          to={to}
                          className={({ isActive }) =>
                            clsx(
                              'flex items-center space-x-2 px-4 py-2 text-sm font-medium',
                              isActive
                                ? 'text-blue-300 dark:text-blue-200'
                                : 'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200',
                              'transition-colors duration-200'
                            )
                          }
                          onClick={() => setIsDropdownOpen(false)}
                          aria-label={label}
                        >
                          {icon}
                          <span>{label}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <button
            onClick={toggleTheme}
            className={clsx(
              'p-1 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
              'hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300',
              'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-950'
            )}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <svg
              className={clsx('w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300', theme === 'dark' ? 'rotate-180' : '')}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {theme === 'light' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            'md:hidden p-2 rounded-md bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100',
            'hover:bg-blue-700 dark:hover:bg-blue-600 animate-[pulse_2s_ease-in-out_infinite]',
            'focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-950'
          )}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 transform transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              className={clsx('transition-all duration-300', isMenuOpen ? 'rotate-90' : '')}
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <ul
          className={clsx(
            'absolute left-0 w-full bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100',
            'flex flex-col items-center space-y-4 py-8 md:hidden',
            'transition-all duration-300 ease-in-out shadow-lg',
            isMenuOpen ? 'top-14 sm:top-16 opacity-100 translate-y-0' : 'top-14 sm:top-16 opacity-0 -translate-y-4 pointer-events-none'
          )}
        >
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center space-x-2 text-base sm:text-lg font-medium uppercase tracking-wide transition-colors duration-200',
                    isActive ? 'text-blue-300 dark:text-blue-200' : 'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200'
                  )
                }
                onClick={() => setIsMenuOpen(false)}
                aria-label={label}
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;