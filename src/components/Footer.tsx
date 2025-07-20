import { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLParagraphElement | HTMLUListElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const socialLinks = [
    { label: t('footer.social.github'), url: 'https://github.com/mahmoud-yousefi', icon: <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" /> },
    { label: t('footer.social.linkedin'), url: 'https://www.linkedin.com/in/mahmood-yoosefi-1586a526b/', icon: <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" /> },
    { label: t('footer.social.whatsapp'), url: 'https://wa.me/09902635947', icon: <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" /> },
    { label: t('footer.social.telegram'), url: 'https://t.me/UsefiMf14', icon: <FaTelegram className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" /> },
    { label: t('footer.social.email'), url: 'mailto:mahmoudyousefics@gmail.com', icon: <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" /> },
  ];

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
        const particleCount = 50;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: Math.random() * 0.3 - 0.15,
            speedY: Math.random() * 0.3 - 0.15,
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
              if (distance < 80) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(59, 130, 246, ${1 - distance / 80})`;
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
  }, [i18n.language]);

  return (
    <footer
      ref={sectionRef}
      className={clsx(
        i18n.language === 'fa'
          ? 'bg-gradient-to-l from-gray-900 via-gray-800 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950'
          : 'bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950',
        'text-white py-12 sm:py-16 lg:py-20 relative overflow-hidden',
        i18n.language === 'fa' ? 'font-vazirmatn' : 'font-inter'
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-30"
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
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeOutDown {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
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
        <div className="text-center mb-8 sm:mb-12">
          <h2
            className={clsx(
              'text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-4 animate-[textGlow_3s_ease-in-out_infinite]',
              'text-center'
            )}
            style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          >
            {t('footer.connect')}
          </h2>
          <p
            ref={(el) => (contentRefs.current[0] = el)}
            className={clsx(
              'text-base sm:text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-6 sm:mb-8 opacity-0',
              'text-center',
              'animate-[fadeInUp_0.8s_ease-out]'
            )}
          >
            {t('footer.tagline')}
          </p>
        </div>
        <ul
          ref={(el) => (contentRefs.current[1] = el)}
          className={clsx(
            'flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 opacity-0',
            i18n.language === 'fa' ? 'space-x-reverse' : '',
            'animate-[fadeInUp_1s_ease-out]'
          )}
        >
          {socialLinks.map(({ label, url, icon }) => (
            <li key={label} className="group">
              <a
                href={url}
                className={clsx(
                  'flex items-center text-sm sm:text-base font-medium transition-all duration-300 animate-[pulse_2s_ease-in-out_infinite]',
                  i18n.language === 'fa' ? 'space-x-reverse space-x-2 text-right' : 'space-x-2 text-left',
                  'text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300'
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.socialAria', { platform: label })}
              >
                {i18n.language === 'fa' ? (
                  <>
                    <span>{label}</span>
                    {icon}
                  </>
                ) : (
                  <>
                    {icon}
                    <span>{label}</span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
        <p
          ref={(el) => (contentRefs.current[2] = el)}
          className={clsx(
            'text-sm sm:text-base text-gray-400 dark:text-gray-500 opacity-0',
            i18n.language === 'fa' ? 'text-right' : 'text-center',
            'animate-[fadeInUp_1.2s_ease-out]'
          )}
        >
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;