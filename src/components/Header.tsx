import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { useState, useEffect, useRef } from 'react';
import myAvatar from '../assets/IMG_20250327_031322_411.webp';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
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

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fa' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const navItems = [
    { to: '/', label: t('header.home'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
    { to: '/about', label: t('header.about'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
    { to: '/skills', label: t('header.skills'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { to: '/projects', label: t('header.projects'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg> },
    { to: '/resume', label: t('header.resume'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
    { to: '/contact', label: t('header.contact'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
    { to: '/blog', label: t('header.blog'), icon: <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 rtl:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> },
  ];

  const visibleItems = navItems.slice(0, 4); // Show only first 4 items on desktop, rest in dropdown
  const dropdownItems = navItems.slice(4); // Remaining items in dropdown

  return (
    <header
      className={clsx(
        'bg-gradient-to-r from-blue-800 via-blue-900 to-gray-900 dark:from-blue-950 dark:via-blue-900 dark:to-gray-950',
        'text-white py-2 sm:py-3 lg:py-4 fixed w-full top-0 shadow-2xl z-50 transition-all duration-500',
        i18n.language === 'fa' ? 'font-vazirmatn' : 'font-inter'
      )}
    >
      <nav className="container mx-auto flex justify-between items-center px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Logo and Avatar */}
        <NavLink to="/about" className="flex items-center space-x-2 sm:space-x-3 group">
          <img
            src={myAvatar}
            alt={t('header.title')}
            className={clsx(
              'w-8 h-8 sm:w-10 sm:h-10 md:w-12 ml-2 md:h-12 lg:w-14 lg:h-14 rounded-full border-2 object-cover shadow-lg',
              'border-blue-300 dark:border-blue-400 group-hover:scale-105 group-hover:shadow-blue-400/60',
              'transition-all duration-500 ease-out'
            )}
            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/40?text=MY')}
          />
          <div
            className={clsx(
              'text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight',
              'text-white dark:text-gray-100 group-hover:text-blue-300 dark:group-hover:text-blue-200',
              'transition-colors duration-500'
            )}
          >
            {t('header.title')}
          </div>
        </NavLink>

        {/* Desktop Navigation and Theme/Language Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
          <ul ref={navRef} className="hidden lg:flex space-x-3 xl:space-x-5 items-center">
            {visibleItems.map(({ to, label, icon }) => (
              <li key={to} className="relative group flex items-center">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm xl:text-base font-semibold tracking-wide',
                      i18n.language === 'fa' ? 'text-right' : 'text-left',
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
                      'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500',
                      'transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center',
                      { 'scale-x-100': window.location.pathname === to }
                    )}
                  />
                </NavLink>
              </li>
            ))}
            {dropdownItems.length > 0 && (
              <li className="relative group">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={clsx(
                    'flex items-center space-x-1 text-xs sm:text-sm xl:text-base font-semibold tracking-wide',
                    i18n.language === 'fa' ? 'text-right' : 'text-left',
                    'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200',
                    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-950'
                  )}
                  aria-label={t('header.more')}
                  aria-expanded={isDropdownOpen}
                  aria-controls="dropdown-menu"
                >
                  <span>{t('header.more')}</span>
                  <svg
                    className={clsx(
                      'w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300',
                      isDropdownOpen ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  ref={dropdownRef}
                  id="dropdown-menu"
                  className={clsx(
                    'absolute mt-3 w-56 bg-gray-800/95 dark:bg-gray-900/95 rounded-xl shadow-2xl backdrop-blur-sm',
                    'flex flex-col space-y-1 py-3 transition-all duration-300 ease-in-out',
                    i18n.language === 'fa' ? 'right-auto left-0' : 'right-0',
                    isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                  )}
                >
                  {dropdownItems.map(({ to, label, icon }) => (
                    <li key={to}>
                      <NavLink
                        to={to}
                        className={({ isActive }) =>
                          clsx(
                            'flex items-center space-x-2 px-4 py-2 text-sm font-medium',
                            i18n.language === 'fa' ? 'text-right' : 'text-left',
                            isActive
                              ? 'text-blue-300 dark:text-blue-200 bg-blue-600/20 dark:bg-blue-700/20'
                              : 'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200 hover:bg-blue-600/10 dark:hover:bg-blue-700/10',
                            'transition-all duration-200 rounded-md mx-2'
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
            <li>
              <button
                onClick={toggleLanguage}
                className={clsx(
                  'flex items-center gap-2 text-xs sm:text-sm xl:text-base font-semibold tracking-wide',
                  'text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-300',
                  'transition-all duration-300 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md'
                )}
                aria-label={i18n.language === 'en' ? 'Switch to Persian' : 'Switch to English'}
              >
                {i18n.language === 'en' ? (
                  <>
                    🇮🇷 <span>FA</span>
                  </>
                ) : (
                  <>
                    🇬🇧 <span>EN</span>
                  </>
                )}
              </button>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className={clsx(
              'p-1.5 sm:p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100',
              'hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300',
              'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-950'
            )}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <svg
              className={clsx('w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-500', theme === 'dark' ? '-rotate-90' : '')}
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
          {/* Mobile Menu Button */}
          <button
            className={clsx(
              'lg:hidden p-1.5 sm:p-2 rounded-lg bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100',
              'hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300',
              'focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 dark:focus:ring-offset-gray-950'
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ease-out"
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
                className={clsx('transition-all duration-500', isMenuOpen ? 'rotate-90' : '')}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={clsx(
            'absolute left-0 w-full bg-gray-900/95 dark:bg-gray-950/95 text-white dark:text-gray-100',
            'flex flex-col items-center space-y-4 py-6 sm:py-8 md:py-10 lg:hidden',
            'transition-all duration-500 ease-in-out shadow-2xl backdrop-blur-sm',
            i18n.language === 'fa' ? 'font-vazirmatn' : 'font-inter',
            isMenuOpen ? 'top-12 sm:top-14 md:top-16 opacity-100 translate-y-0' : 'top-12 sm:top-14 md:top-16 opacity-0 -translate-y-6 pointer-events-none'
          )}
        >
          {navItems.map(({ to, label, icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold tracking-wide',
                    i18n.language === 'fa' ? 'text-right' : 'text-left',
                    isActive
                      ? 'text-blue-300 dark:text-blue-200 bg-blue-600/20 dark:bg-blue-700/20'
                      : 'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200 hover:bg-blue-600/10 dark:hover:bg-blue-700/10',
                    'transition-all duration-300 px-4 py-2 rounded-md'
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
          <li>
            <button
              onClick={toggleLanguage}
              className={clsx(
                'flex items-center space-x-2 text-sm sm:text-base md:text-lg font-semibold tracking-wide',
                i18n.language === 'fa' ? 'text-right' : 'text-left',
                'text-gray-100 dark:text-gray-200 hover:text-blue-300 dark:hover:text-blue-200',
                'transition-all duration-300 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700'
              )}
              aria-label={i18n.language === 'en' ? 'Switch to Persian' : 'Switch to English'}
            >
              {i18n.language === 'en' ? 'FA' : 'EN'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;