import { useEffect, useRef } from 'react';
import { FaCode, FaMap, FaServer, FaVial, FaRocket, FaPaintBrush, FaDatabase } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const Blog: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const blogPosts = [
    {
      id: 1,
      key: 'post1',
      url: 'https://reactjs.org/docs/getting-started.html',
      icon: <FaCode className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 2,
      key: 'post2',
      url: 'https://openlayers.org/',
      icon: <FaMap className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 3,
      key: 'post3',
      url: 'https://docs.nestjs.com/techniques/performance',
      icon: <FaServer className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 4,
      key: 'post4',
      url: 'https://docs.cypress.io/guides/getting-started/testing-your-app#React',
      icon: <FaVial className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 5,
      key: 'post5',
      url: 'https://nextui.org/docs/',
      icon: <FaRocket className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 6,
      key: 'post6',
      url: 'https://www.djangoproject.com/start/',
      icon: <FaDatabase className="w-16 h-16 text-blue-600" />,
    },
    {
      id: 7,
      key: 'post7',
      url: 'https://ant.design/docs/react/introduce',
      icon: <FaPaintBrush className="w-16 h-16 text-blue-600" />,
    },
  ];

  useEffect(() => {
    // Intersection Observer for card animations
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

    cardRefs.current.forEach((ref) => {
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
        const particleCount = 80;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 0.4 - 0.2,
            speedY: Math.random() * 0.4 - 0.2,
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

            // Connect nearby particles
            particles.forEach((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 90) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 90})`;
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
      cardRefs.current.forEach((ref) => {
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
      aria-label={t('blog.title')}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40"
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
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes textGlow {
            0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 10px rgba(59, 130, 246, 0.7); }
            100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <h2
          className={clsx(
            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[textGlow_3s_ease-in-out_infinite]',
            'text-center'
          )}
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          {t('blog.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={clsx(
                'bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8',
                'opacity-0 transition-all duration-300 hover:shadow-2xl hover:bg-blue-50 dark:hover:bg-blue-900/50'
              )}
            >
              <div
                className={clsx(
                  'flex items-center mb-4',
                  i18n.language === 'fa' ? 'space-x-reverse space-x-3' : 'space-x-3'
                )}
              >
                {i18n.language === 'fa' ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {t(`blog.posts.${post.key}.title`)}
                    </h3>
                    {post.icon}
                  </>
                ) : (
                  <>
                    {post.icon}
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {t(`blog.posts.${post.key}.title`)}
                    </h3>
                  </>
                )}
              </div>
              <p
                className={clsx(
                  'text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base leading-relaxed',
                  i18n.language === 'fa' ? 'text-right' : 'text-left'
                )}
              >
                {t(`blog.posts.${post.key}.excerpt`)}
              </p>
              <div
                className={clsx(
                  'flex flex-wrap gap-2 mb-4',
                  i18n.language === 'fa' ? 'justify-start space-x-reverse space-x-2' : 'justify-start space-x-2'
                )}
              >
                {(t(`blog.posts.${post.key}.badges`, { returnObjects: true }) as string[]).map((badge) => (
                  <span
                    key={badge}
                    className={clsx(
                      'inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs sm:text-sm px-2 py-1 rounded-full font-medium',
                      i18n.language === 'fa' ? 'text-right' : 'text-left'
                    )}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  'inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300',
                  'font-semibold text-sm sm:text-base transition-colors duration-300 animate-[pulse_2s_ease-in-out_infinite]',
                  i18n.language === 'fa' ? 'space-x-reverse space-x-2' : 'space-x-2'
                )}
                aria-label={t('blog.readMoreAria', { title: t(`blog.posts.${post.key}.title`) })}
              >
                {i18n.language === 'fa' ? (
                  <>
                    <span>{t('blog.readMore')}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span>{t('blog.readMore')}</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;