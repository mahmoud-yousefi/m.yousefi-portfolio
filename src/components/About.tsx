import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Intersection Observer for paragraph animations
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

    paragraphRefs.current.forEach((ref) => {
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

            // Connect nearby particles
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
      paragraphRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={clsx(
        'min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden py-12 sm:py-16 lg:py-20',
        i18n.language === 'fa' ? 'font-vazirmatn text-right' : 'font-inter text-justify'
      )}
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
        animation: 'gradientShift 20s ease infinite',
      }}
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
          @keyframes slideIn {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[slideIn_0.8s_ease-out] animate-[textGlow_3s_ease-in-out_infinite]"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          {t('about.title')}
        </h2>
        <div className={clsx('max-w-4xl mx-auto space-y-6 sm:space-y-8', i18n.language === 'fa' ? 'text-right' : 'text-justify')}>
          {[1, 2, 3, 4, 5].map((index) => (
            <p
              key={index}
              ref={(el) => (paragraphRefs.current[index - 1] = el)}
              className={clsx(
                'text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed opacity-0',
                'animate-[subtlePulse_2s_ease-in-out_infinite]',
                `animation-delay-${index * 200}`
              )}
            >
              {t(`about.paragraph${index}`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;