import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useState } from 'react';
import myAvatar from '../assets/IMG_20250327_031322_411.webp';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        className={clsx(
          'min-h-screen bg-gradient-to-br from-blue-700 via-gray-800 to-blue-600 dark:from-blue-900 dark:via-gray-900 dark:to-blue-800',
          'flex items-center justify-center relative overflow-hidden font-inter py-10 sm:py-12 lg:py-16'
        )}
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)',
          animation: 'gradientShift 25s ease infinite',
        }}
      >
        <style>
          {`
            @keyframes gradientShift {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.03); }
            }
            @keyframes bounceSoft {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            @keyframes modalFadeIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
          <button
            onClick={openModal}
            className="mx-auto mb-6 sm:mb-8 focus:outline-none"
            aria-label="View Mahmoud Yousefi's profile picture"
          >
            <img
              src={myAvatar}
              alt="Mahmoud Yousefi"
              className={clsx(
                'w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto rounded-full border-4',
                'border-blue-300 dark:border-blue-400 object-cover shadow-xl',
                'hover:scale-105 hover:shadow-blue-400/50 dark:hover:shadow-blue-500/50 transition-all duration-500 ease-out'
              )}
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80?text=MY')}
            />
          </button>
          <h1
            className={clsx(
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 dark:text-white mb-4 sm:mb-6',
              'animate-[fadeInUp_0.8s_ease-out]'
            )}
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
          >
            Building Innovative Web & GIS Solutions
          </h1>
          <p
            className={clsx(
              'text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12',
              'animate-[fadeInUp_1s_ease-out]'
            )}
          >
            Hi, I’m Mahmoud Yousefi, a Full-Stack Developer crafting seamless, user-focused web applications and geospatial systems using React, TypeScript, and modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
            <Link
              to="/contact"
              className={clsx(
                'bg-blue-500 dark:bg-blue-600 text-white py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold',
                'shadow-lg hover:bg-blue-600 dark:hover:bg-blue-700 hover:scale-105',
                'transition-all duration-300 animate-[pulse_2.5s_ease-in-out_infinite]',
                'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-900'
              )}
              aria-label="Contact Mahmoud Yousefi"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className={clsx(
                'bg-transparent border-2 border-blue-300 dark:border-blue-400 text-blue-300 dark:text-blue-400',
                'py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold',
                'hover:bg-blue-300 dark:hover:bg-blue-400 hover:text-gray-900 dark:hover:text-gray-900 hover:scale-105',
                'transition-all duration-300 animate-[pulse_2.5s_ease-in-out_infinite]',
                'focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 dark:focus:ring-offset-gray-900'
              )}
              aria-label="View Mahmoud Yousefi's Projects"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for enlarged avatar */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 dark:bg-black/70 flex items-center justify-center z-50"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged profile picture"
        >
          <div
            className="relative animate-[modalFadeIn_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={myAvatar}
              alt="Mahmoud Yousefi Enlarged"
              className={clsx(
                'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover border-4',
                'border-blue-300 dark:border-blue-400 shadow-2xl'
              )}
              onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/200?text=MY')}
            />
            <button
              onClick={closeModal}
              className={clsx(
                'absolute top-4 right-4 p-2 bg-gray-800/90 dark:bg-gray-700/90 text-white rounded-full',
                'hover:bg-gray-700 dark:hover:bg-gray-600 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black'
              )}
              aria-label="Close profile picture modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;