import { useEffect, useRef } from 'react';
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaLanguage, FaDownload } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import PDF from '../assets/Mahmoud-Yousefi.pdf';

const Resume: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skills = {
    programmingScripting: [
      'JavaScript',
      'TypeScript',
      'PHP',
      'Python',
    ],
    frameworksLibraries: [
      'ReactJS',
      'Redux-Toolkit',
      'Redux-Thunk',
      'React Hooks',
      'Ant Design',
      'Material UI',
      'Node.js (Nest.js)',
      'Next.js',
      'Express.js',
      'FastApi',
      'DRF',
      'Django',
      'Flask',
    ],
    gisTechnologies: ['OpenLayers', 'Maplibre'],
    toolsTechnologies: [
      'Git',
      'GitHub',
      'GitLab',
      'Docker',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Prisma',
      'TypeORM',
      'SQLAlchemy',
      'Alembic',
    ],
    webDevelopment: [
      'HTML & CSS',
      'SASS',
      'Less',
      'TailwindCSS',
      'Bootstrap',
      'Flexbox',
      'Grid',
      'ESX (Ecmascript)',
    ],
    testingValidation: ['MVC', 'D3Js', 'Cypress Test', 'Yup', 'Zod'],
    otherSkills: ['Solid Principles', 'REST API Development'],
  };

  useEffect(() => {
    // Intersection Observer for content animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-[fadeInUp_0.8s_ease-out_forwards]');
            entry.target.classList.remove('animate-[fadeOutDown_0.8s_ease-out_forwards]');
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.add('animate-[fadeOutDown_0.8s_ease-out_forwards]');
            entry.target.classList.remove('animate-[fadeInUp_0.8s_ease-out_forwards]');
          }
        });
      },
      { threshold: 0.2 }
    );

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Particle animation setup
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
        const particleCount = 100;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
          });
        }

        // Animation loop
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';

          particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Bounce off edges
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Connect Colin: nearby particles
            particles.forEach((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 100})`;
                ctx.stroke();
              }
            });
          });

          requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }

    return () => {
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={clsx(
        'min-h-screen relative overflow-hidden py-12 sm:py-16 lg:py-20',
        i18n.language === 'fa'
          ? 'bg-gradient-to-l from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 font-vazirmatn'
          : 'bg-gradient-to-r from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 font-inter'
      )}
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
        animation: 'gradientShift 20s ease infinite',
      }}
      aria-label={t('resume.title')}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-50"
        style={{ pointerEvents: 'none' }}
      />
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
          @keyframes fadeOutDown {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(30px); }
          }
          @keyframes subtlePulse {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.02); opacity: 1; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          @keyframes textGlow {
            0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.7); }
            100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <h2
          className={clsx(
            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[textGlow_3s_ease-in-out_infinite]',
            'text-center'
          )}
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          {t('resume.title')}
        </h2>
        <div className={clsx('text-center mb-8 sm:mb-12')}>
          <a
            href={PDF}
            download="Mahmoud-Yousefi.pdf"
            className={clsx(
              'inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 animate-[subtlePulse_2s_ease-in-out_infinite]',
              i18n.language === 'fa' ? 'space-x-reverse space-x-2' : 'space-x-2'
            )}
            aria-label={t('resume.downloadAria')}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.download')}</span>
                <FaDownload />
              </>
            ) : (
              <>
                <FaDownload />
                <span>{t('resume.download')}</span>
              </>
            )}
          </a>
        </div>

        <div
          ref={(el) => (contentRefs.current[0] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3
            className={clsx(
              'text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center',
              i18n.language === 'fa' ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'
            )}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.professionalSummary.title')}</span>
                <FaUser className="text-blue-600" />
              </>
            ) : (
              <>
                <FaUser className="text-blue-600" />
                <span>{t('resume.professionalSummary.title')}</span>
              </>
            )}
          </h3>
          <p className={clsx('text-gray-600 dark:text-gray-300 leading-relaxed', i18n.language === 'fa' ? 'text-right' : 'text-left')}>
            {t('resume.professionalSummary.description')}
          </p>
        </div>

        <div
          ref={(el) => (contentRefs.current[1] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3
            className={clsx(
              'text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center',
              i18n.language === 'fa' ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'
            )}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.education.title')}</span>
                <FaGraduationCap className="text-blue-600" />
              </>
            ) : (
              <>
                <FaGraduationCap className="text-blue-600" />
                <span>{t('resume.education.title')}</span>
              </>
            )}
          </h3>
          <div className={clsx('mb-4', i18n.language === 'fa' ? 'text-right' : 'text-left')}>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t('resume.education.masters.title')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('resume.education.masters.details')}</p>
          </div>
          <div className={clsx(i18n.language === 'fa' ? 'text-right' : 'text-left')}>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t('resume.education.bachelors.title')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('resume.education.bachelors.details')}</p>
          </div>
        </div>

        <div
          ref={(el) => (contentRefs.current[2] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3
            className={clsx(
              'text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center',
              i18n.language === 'fa' ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'
            )}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.skills.title')}</span>
                <FaTools className="text-blue-600" />
              </>
            ) : (
              <>
                <FaTools className="text-blue-600" />
                <span>{t('resume.skills.title')}</span>
              </>
            )}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([categoryKey, items]) => (
              <div key={categoryKey} className="mb-4">
                <h4 className={clsx('text-lg font-semibold text-gray-800 dark:text-gray-200', i18n.language === 'fa' ? 'text-right' : 'text-left')}>
                  {t(`resume.skills.categories.${categoryKey}`)}
                </h4>
                <ul className={clsx('text-gray-600 dark:text-gray-300', i18n.language === 'fa' ? 'list-outside pr-4' : 'list-disc list-inside')}>
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className={clsx(
                        'transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400',
                        i18n.language === 'fa' ? 'text-right' : 'text-left'
                      )}
                    >
                      {t(`resume.skills.items.${skill.replace(/\s|&|\(|\)/g, '')}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={(el) => (contentRefs.current[3] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3
            className={clsx(
              'text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center',
              i18n.language === 'fa' ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'
            )}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.professionalExperience.title')}</span>
                <FaBriefcase className="text-blue-600" />
              </>
            ) : (
              <>
                <FaBriefcase className="text-blue-600" />
                <span>{t('resume.professionalExperience.title')}</span>
              </>
            )}
          </h3>
          <div className={clsx(i18n.language === 'fa' ? 'text-right' : 'text-left')}>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{t('resume.professionalExperience.frontendDeveloper.title')}</h4>
            <p className="text-gray-600 dark:text-gray-300">{t('resume.professionalExperience.frontendDeveloper.details')}</p>
            <ul className={clsx('text-gray-600 dark:text-gray-300 mt-2', i18n.language === 'fa' ? 'list-outside pr-4' : 'list-disc list-inside')}>
              {['task1', 'task2', 'task3', 'task4'].map((task) => (
                <li
                  key={task}
                  className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {t(`resume.professionalExperience.frontendDeveloper.tasks.${task}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          ref={(el) => (contentRefs.current[4] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3
            className={clsx(
              'text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center',
              i18n.language === 'fa' ? 'space-x-reverse space-x-3 text-right' : 'space-x-3 text-left'
            )}
          >
            {i18n.language === 'fa' ? (
              <>
                <span>{t('resume.languages.title')}</span>
                <FaLanguage className="text-blue-600" />
              </>
            ) : (
              <>
                <FaLanguage className="text-blue-600" />
                <span>{t('resume.languages.title')}</span>
              </>
            )}
          </h3>
          <ul className={clsx('text-gray-600 dark:text-gray-300', i18n.language === 'fa' ? 'list-outside pr-4' : 'list-disc list-inside')}>
            <li className={clsx('transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400', i18n.language === 'fa' ? 'text-right' : 'text-left')}>
              {t('resume.languages.english')}
            </li>
            <li className={clsx('transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400', i18n.language === 'fa' ? 'text-right' : 'text-left')}>
              {t('resume.languages.persian')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;