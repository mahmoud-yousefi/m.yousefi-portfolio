import { useEffect, useRef } from 'react';
import { FaUser, FaGraduationCap, FaTools, FaBriefcase, FaLanguage, FaDownload } from 'react-icons/fa';
import PDF from '../assets/Mahmoud-Yousefi.pdf';

const Resume: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const skills = {
    'Programming & Scripting': ['JavaScript', 'TypeScript', 'PHP', 'Python'],
    'Frameworks & Libraries': ['ReactJS', 'Redux-Toolkit', 'Redux-Thunk', 'React Hooks', 'Ant Design', 'Material UI', 'Node.js (Nest.js)', 'Next.js', 'Express.js', 'FastApi', 'DRF', 'Django', 'Flask'],
    'GIS Technologies': ['OpenLayers', 'Maplibre'],
    'Tools & Technologies': ['Git', 'GitHub', 'GitLab', 'Docker', 'MySQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'TypeORM', 'SQLAlchemy', 'Alembic'],
    'Web Development': ['HTML & CSS', 'SASS', 'Less', 'TailwindCSS', 'Bootstrap', 'Flexbox', 'Grid', 'ESX (Ecmascript)'],
    'Testing & Validation': ['MVC', 'D3Js', 'Cypress Test', 'Yup', 'Zod'],
    'Other Skills': ['Solid Principles', 'REST API Development']
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
      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden font-inter py-12 sm:py-16 lg:py-20"
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
          @keyframes subtlePulse {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.02); opacity: 1; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          @keyframes textGlow {
            0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 10px rgba(59 trudno, 246, 0.7); }
            100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[textGlow_3s_ease-in-out_infinite]"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          Resume
        </h2>
        <div className="text-center mb-8 sm:mb-12">
          <a
            href={PDF}
            download="Mahmoud-Yousefi.pdf"
            className="inline-flex items-center bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300 animate-[subtlePulse_2s_ease-in-out_infinite]"
          >
            <FaDownload className="mr-2" />
            Download Resume (PDF)
          </a>
        </div>

        <div
          ref={(el) => (contentRefs.current[0] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <FaUser className="mr-3 text-blue-600" />
            Professional Summary
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            A passionate and skilled Full-Stack Developer with a strong background in Computer Science, currently pursuing a Master's degree in Algorithms and Theory of Computation. I have hands-on experience in building, optimizing, and maintaining complex web applications using modern technologies. I excel in developing user-friendly interfaces, implementing efficient solutions, and collaborating in team environments to drive project success.
          </p>
        </div>

        <div
          ref={(el) => (contentRefs.current[1] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <FaGraduationCap className="mr-3 text-blue-600" />
            Education
          </h3>
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Master's Degree in Algorithms and Theory of Computation</h4>
            <p className="text-gray-600 dark:text-gray-300">Shahed University, Tehran, Iran | 2024 – Present</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bachelor's Degree in Computer Science</h4>
            <p className="text-gray-600 dark:text-gray-300">Shahed University, Tehran, Iran | Graduated 2024</p>
          </div>
        </div>

        <div
          ref={(el) => (contentRefs.current[2] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 mb-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <FaTools className="mr-3 text-blue-600" />
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{category}</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {items.map((skill) => (
                    <li key={skill} className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">{skill}</li>
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
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <FaBriefcase className="mr-3 text-blue-600" />
            Professional Experience
          </h3>
          <div>
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Front-End Developer</h4>
            <p className="text-gray-600 dark:text-gray-300">Hoshan Kavosh Borna, Tehran, Iran | March 2024 – Present</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
              <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Designed and implemented a modern UI for Bizagi workflow engine, enabling intuitive user interaction for internal business processes.</li>
              <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Customized complex UI components to interact with organizational workflows and forms, improving user experience and operational efficiency.</li>
              <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Developed and customized MapStore2, an open-source project, to meet internal project requirements, enhancing mapping functionalities.</li>
              <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Created a template integrated with Apache NIFI to display and manage process groups in a table format.</li>
            </ul>
          </div>
        </div>

        <div
          ref={(el) => (contentRefs.current[4] = el)}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 opacity-0 transition-all duration-300 hover:shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
            <FaLanguage className="mr-3 text-blue-600" />
            Languages
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">English: Upper-intermediate</li>
            <li className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Persian: Native</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;