import { useEffect, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLParagraphElement | HTMLUListElement | HTMLHeadingElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const contactMethods = [
    {
      key: 'email',
      value: 'mahmoudyousefics@gmail.com',
      url: 'mailto:mahmoudyousefics@gmail.com',
      icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      key: 'linkedin',
      value: 'Mahmoud Yousefi',
      url: 'https://www.linkedin.com/in/mahmood-yoosefi-1586a526b/',
      icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      key: 'github',
      value: 'mahmoud-yousefi',
      url: 'https://github.com/mahmoud-yousefi',
      icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      key: 'whatsapp',
      value: '+989902635947',
      url: 'https://wa.me/09902635947',
      icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      key: 'telegram',
      value: '@UsefiMf14',
      url: 'https://t.me/UsefiMf14',
      icon: <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
  
          if (entry.isIntersecting) {
            el.classList.add('animate-[fadeInUp_0.8s_ease-out_forwards]');
            el.classList.remove('animate-[fadeOutDown_0.8s_ease-out_forwards]');
            el.style.opacity = '1'; 
          } else if (entry.boundingClientRect.top > 0) {
            el.classList.add('animate-[fadeOutDown_0.8s_ease-out_forwards]');
            el.classList.remove('animate-[fadeInUp_0.8s_ease-out_forwards]');
            el.style.opacity = '0'; 
          }
        });
      },
      { threshold: 0.2 }
    );
  
    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    // Particle canvas setup
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
  
        const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
        const particleCount = 80;
  
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 0.4 - 0.2,
            speedY: Math.random() * 0.4 - 0.2,
          });
        }
  
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
  
          particles.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
  
            if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
            if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
  
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
  
            particles.forEach((other) => {
              const dx = particle.x - other.x;
              const dy = particle.y - other.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < 90) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(other.x, other.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 90})`;
                ctx.stroke();
              }
            });
          });
  
          requestAnimationFrame(animate);
        };
  
        animate();
  
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
  }, [i18n.language]);

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
      aria-label={t('contact.title')}
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <h2
          ref={(el) => (contentRefs.current[0] = el)}
          className={clsx(
            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[textGlow_3s_ease-in-out_infinite] opacity-0',
            'text-center'
          )}
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          {t('contact.title')}
        </h2>
        <p
          ref={(el) => (contentRefs.current[1] = el)}
          className={clsx(
            'text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-0',
            i18n.language === 'fa' ? 'text-right' : 'text-center',
            'animate-[fadeInUp_0.8s_ease-out]'
          )}
        >
          {t('contact.description')}
        </p>
        <ul
          ref={(el) => (contentRefs.current[2] = el)}
          className={clsx(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto opacity-0 animate-[fadeInUp_1s_ease-out]',
            i18n.language === 'fa' ? 'text-right' : 'text-left'
          )}
        >
          {contactMethods.map(({ key, value, url, icon }) => (
            <li key={key} className="group">
              <a
                href={url}
                className={clsx(
                  'flex items-center bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6',
                  'text-gray-900 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-300',
                  'text-base sm:text-lg font-semibold animate-[pulse_2s_ease-in-out_infinite]',
                  i18n.language === 'fa' ? 'space-x-reverse space-x-3' : 'space-x-3'
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('contact.methodsAria', { platform: t(`contact.methods.${key}.label`) })}
              >
                {i18n.language === 'fa' ? (
                  <>
                    <div>
                      <span className="block font-bold">{t(`contact.methods.${key}.label`)}</span>
                      <span style={{direction: 'ltr'}} className="block text-gray-600 dark:text-gray-300 text-sm sm:text-base">{value}</span>
                    </div>
                    {icon}
                  </>
                ) : (
                  <>
                    {icon}
                    <div>
                      <span className="block font-bold">{t(`contact.methods.${key}.label`)}</span>
                      <span className="block text-gray-600 dark:text-gray-300 text-sm sm:text-base">{value}</span>
                    </div>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;