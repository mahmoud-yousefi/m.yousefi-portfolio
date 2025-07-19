import { useEffect, useRef, forwardRef } from 'react';
import {
  FaPython, FaReact, FaPaintbrush, FaPaintRoller,
  FaNode, FaMap, FaGlobe, FaGitAlt, FaGithub, FaGitlab,
  FaDocker, FaDatabase, FaCode, FaHtml5, FaSass, FaCss3Alt,
  FaBootstrap, FaCodeBranch, FaChartBar, FaVial, FaCircleCheck
} from 'react-icons/fa6';
import { FaJs, FaPhp, FaNodeJs, FaLess, FaTh, FaThLarge, FaCogs, FaExchangeAlt } from 'react-icons/fa';

// Skill data with react-icons components and custom colors
const skillCategories = [
  {
    category: 'Programming & Scripting',
    skills: [
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', darkColor: '#FBBF24' },
      { name: 'TypeScript', icon: FaJs, color: '#3178C6', darkColor: '#60A5FA' },
      { name: 'PHP', icon: FaPhp, color: '#777BB4', darkColor: '#A5B4FC' },
      { name: 'Python', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'ReactJS', icon: FaReact, color: '#61DAFB', darkColor: '#7DD3FC' },
      { name: 'Redux-Toolkit', icon: FaReact, color: '#61DAFB', darkColor: '#7DD3FC' },
      { name: 'Redux-Thunk', icon: FaReact, color: '#61DAFB', darkColor: '#7DD3FC' },
      { name: 'React Hooks', icon: FaReact, color: '#61DAFB', darkColor: '#7DD3FC' },
      { name: 'Ant Design', icon: FaPaintbrush, color: '#0170FE', darkColor: '#3B82F6' },
      { name: 'Material UI', icon: FaPaintRoller, color: '#0081CB', darkColor: '#38BDF8' },
      { name: 'Node.js (Nest.js)', icon: FaNode, color: '#339933', darkColor: '#4ADE80' },
      { name: 'Next.js', icon: FaReact, color: '#61DAFB', darkColor: '#7DD3FC' },
      { name: 'Express.js', icon: FaNodeJs, color: '#000000', darkColor: '#4B5563' },
      { name: 'FastAPI', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
      { name: 'DRF', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
      { name: 'Django', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
      { name: 'Flask', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
    ],
  },
  {
    category: 'GIS Technologies',
    skills: [
      { name: 'OpenLayers', icon: FaMap, color: '#1F6B75', darkColor: '#2DD4BF' },
      { name: 'Maplibre', icon: FaGlobe, color: '#4A90E2', darkColor: '#60A5FA' },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', darkColor: '#F87171' },
      { name: 'GitHub', icon: FaGithub, color: '#181717', darkColor: '#4B5563' },
      { name: 'GitLab', icon: FaGitlab, color: '#FC6D26', darkColor: '#F97316' },
      { name: 'Docker', icon: FaDocker, color: '#2496ED', darkColor: '#60A5FA' },
      { name: 'MySQL', icon: FaDatabase, color: '#4479A1', darkColor: '#60A5FA' },
      { name: 'PostgreSQL', icon: FaDatabase, color: '#4169E1', darkColor: '#60A5FA' },
      { name: 'MongoDB', icon: FaDatabase, color: '#47A248', darkColor: '#4ADE80' },
      { name: 'Prisma', icon: FaCode, color: '#2D3748', darkColor: '#4B5563' },
      { name: 'TypeORM', icon: FaCode, color: '#E0225C', darkColor: '#F87171' },
      { name: 'SQLAlchemy', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
      { name: 'Alembic', icon: FaPython, color: '#7E57C2', darkColor: '#A78BFA' },
    ],
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'HTML & CSS', icon: FaHtml5, color: '#E34F26', darkColor: '#F87171' },
      { name: 'SASS', icon: FaSass, color: '#CC6699', darkColor: '#F472B6' },
      { name: 'Less', icon: FaLess, color: '#1D365D', darkColor: '#60A5FA' },
      { name: 'TailwindCSS', icon: FaCss3Alt, color: '#06B6D4', darkColor: '#22D3EE' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', darkColor: '#A78BFA' },
      { name: 'Flexbox', icon: FaTh, color: '#3B82F6', darkColor: '#60A5FA' },
      { name: 'Grid', icon: FaThLarge, color: '#3B82F6', darkColor: '#60A5FA' },
      { name: 'ESX (EcmaScript)', icon: FaJs, color: '#F7DF1E', darkColor: '#FBBF24' },
    ],
  },
  {
    category: 'Testing & Validation Libraries',
    skills: [
      { name: 'MVC', icon: FaCodeBranch, color: '#6B7280', darkColor: '#9CA3AF' },
      { name: 'D3.js', icon: FaChartBar, color: '#F9A03C', darkColor: '#FBBF24' },
      { name: 'Cypress Test', icon: FaVial, color: '#04C4B4', darkColor: '#2DD4BF' },
      { name: 'Yup', icon: FaCircleCheck, color: '#10B981', darkColor: '#34D399' },
      { name: 'Zod', icon: FaCircleCheck, color: '#10B981', darkColor: '#34D399' },
    ],
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Solid Principles', icon: FaCogs, color: '#6B7280', darkColor: '#9CA3AF' },
      { name: 'REST API Development', icon: FaExchangeAlt, color: '#F97316', darkColor: '#FBBF24' },
    ],
  },
];

const SkillCard = forwardRef(({ skill, index }, ref) => {
  const Icon = skill.icon; // Store the icon component
  return (
    <div
      ref={ref}
      className="group flex items-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_forwards]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Icon
        className={`text-2xl sm:text-3xl mr-3 sm:mr-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 animate-[rotateIn_1.2s_ease-in-out_forwards] dark:[color:${skill.darkColor}]`}
        style={{ color: skill.color, animationDelay: `${index * 0.1}s` }}
      />
      <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
        {skill.name}
      </span>
    </div>
  );
});

const Skills = () => {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const cardRefs = useRef(new Map());

  useEffect(() => {
    // Intersection Observer for card animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-[fadeInUp_0.8s_ease-out_forwards]');
            entry.target.classList.remove('opacity-0');
            entry.target.classList.remove('animate-[fadeOutDown_0.8s_ease-out_forwards]');
          } else if (entry.boundingClientRect.top > 0) {
            entry.target.classList.add('animate-[fadeOutDown_0.8s_ease-out_forwards]');
            entry.target.classList.remove('animate-[fadeInUp_0.8s_ease-out_forwards]');
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe all card refs
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

        const particles = [];
        const particleCount = 60;

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.3 - 0.15,
            speedY: Math.random() * 0.3 - 0.15,
          });
        }

        // Animation loop
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(59, 130, 246, 0.15)';
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)';

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

    // Cleanup observer
    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-900 dark:to-blue-950 relative overflow-hidden font-inter py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 60%)',
        animation: 'gradientShift 20s ease infinite',
      }}
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
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeOutDown {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(20px); }
          }
          @keyframes subtlePulse {
            0% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            50% { transform: scale(1.03); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); }
            100% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          }
          @keyframes textGlow {
            0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
            100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          }
          @keyframes rotateIn {
            0% { transform: rotate(0deg) scale(1); opacity: 0; }
            50% { transform: rotate(180deg) scale(1.2); opacity: 0.7; }
            100% { transform: rotate(360deg) scale(1); opacity: 1; }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[fadeInUp_0.8s_ease-out] animate-[textGlow_3s_ease-in-out_infinite]"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          My Skills
        </h2>
        {skillCategories.map((category, catIndex) => (
          <div key={category.category} className="mb-12">
            <h3
              className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6 animate-[fadeInUp_0.8s_ease-out]"
              style={{ animationDelay: `${catIndex * 0.2}s` }}
            >
              {category.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={`${category.category}-${skill.name}`}
                  skill={skill}
                  index={catIndex * 100 + index}
                  ref={(el) => cardRefs.current.set(`${category.category}-${skill.name}`, el)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;