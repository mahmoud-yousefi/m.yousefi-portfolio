import { useEffect, useRef, forwardRef, type FC } from 'react';
import { FaGithub } from 'react-icons/fa6';
import GraphImage from '../assets/graph.png';
import AntdTest from '../assets/antd-test.png';

// Project data
const projects = [
  {
    id: 1,
    title: 'Modern Shop Repo',
    description: 'An e-commerce platform built with modern web technologies.',
    image: 'https://mahmoud-yousefi.github.io/modern-shop-repo/images/shop.webp',
    liveUrl: 'https://mahmoud-yousefi.github.io/modern-shop-repo/',
    codeUrl: 'https://github.com/mahmoud-yousefi/modern-shop-repo',
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'A personal portfolio showcasing projects and skills.',
    image: 'https://mahmoud-yousefi.github.io/portfolio/static/media/avatar02.9f4cce122ed25a4dd12e.jpg',
    liveUrl: 'https://mahmoud-yousefi.github.io/m.yousefi-portfolio/',
    codeUrl: 'https://github.com/mahmoud-yousefi/m.yousefi-portfolio',
  },
  {
    id: 4,
    title: 'Advanced Graph',
    description: 'A data visualization tool for complex graph structures.',
    image: GraphImage,
    liveUrl: 'https://mahmoud-yousefi.github.io/AdvancedGraph/',
    codeUrl: 'https://github.com/mahmoud-yousefi/AdvancedGraph',
  },
  {
    id: 5,
    title: 'FastAPI Alembic SQLAlchemy',
    description: 'A FastAPI project with database migrations using Alembic and SQLAlchemy.',
    image: 'https://avatars.githubusercontent.com/u/1066203?s=280&v=4',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/fastapi-alembic-sqlalchemy',
  },
  {
    id: 6,
    title: 'DRF',
    description: 'A Django REST Framework project for building APIs.',
    image: 'https://play-lh.googleusercontent.com/VEydT3EiXaCLGmpR3uvn1XI_qXDw9E3kQyLAjrPMUPJuk60CqeOQXsRodkKpTfnqGA',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/drf',
  },
  {
    id: 7,
    title: 'Django Tutorial',
    description: 'A tutorial project demonstrating Django fundamentals.',
    image: 'https://www.svgrepo.com/show/353657/django-icon.svg',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/django-tutorial',
  },
  {
    id: 2,
    title: 'Auth App',
    description: 'A secure authentication application with user management.',
    image: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
    liveUrl: 'https://mahmoud-yousefi.github.io/auth-app/auth',
    codeUrl: 'https://github.com/mahmoud-yousefi/auth-app',
  },
  {
    id: 8,
    title: 'FastAPI MySQL',
    description: 'A FastAPI application integrated with MySQL.',
    image: 'https://www.svgrepo.com/show/303251/mysql-logo.svg',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/FastAPI-MySQL',
  },
  {
    id: 9,
    title: 'Flask Tutorial',
    description: 'A tutorial project for learning Flask framework.',
    image: 'https://cdn.worldvectorlogo.com/logos/flask.svg',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/flask-tutorial',
  },
  {
    id: 10,
    title: 'FastAPI',
    description: 'A FastAPI project for building high-performance APIs.',
    image: 'https://res.cloudinary.com/harendra21/image/upload/v1742473055/withcodeexample.com/getting-started-with-python-fastapi-a-comprehensive-guide_tnigh2.jpg',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/fastapi',
  },
  {
    id: 11,
    title: 'Wicket App',
    description: 'An application built using Apache Wicket framework.',
    image: 'https://images.seeklogo.com/logo-png/36/2/wicket-logo-png_seeklogo-363145.png',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/wicket-app',
  },
  {
    id: 12,
    title: 'NestJS MongoDB',
    description: 'A NestJS application integrated with MongoDB.',
    image: 'https://a.storyblok.com/f/42126/34a4f9ca6e/using-nestjs-with-mongodb.png/m/1600x900/filters:quality(70)/',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/nestjs-mongobd',
  },
  // {
  //   id: 13,
  //   title: 'FTP Test',
  //   description: 'A project for testing FTP functionalities.',
  //   image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
  //   liveUrl: '#',
  //   codeUrl: 'https://github.com/mahmoud-yousefi/ftp-test',
  // },
  {
    id: 14,
    title: 'NestJS TypeORM',
    description: 'A NestJS project using TypeORM for database management.',
    image: 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fztuzxxv00drrj019la1h.jpg',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/nestjs-typeorm',
  },
  {
    id: 15,
    title: 'GIS Example',
    description: 'A GIS application demonstrating geospatial functionalities.',
    image: 'https://static.thenounproject.com/png/14294-200.png',
    liveUrl: '#',
    codeUrl: 'https://github.com/mahmoud-yousefi/GIS-example',
  },
  {
    id: 16,
    title: 'Ant Design Test',
    description: 'A project testing Ant Design components.',
    image: AntdTest,
    liveUrl: 'https://mahmoud-yousefi.github.io/antd-test/',
    codeUrl: 'https://github.com/mahmoud-yousefi/antd-test',
  },
  {
    id: 17,
    title: 'Portfolio (Additional)',
    description: 'Another portfolio project showcasing additional work.',
    image: 'https://mahmoud-yousefi.github.io/portfolio/static/media/avatar.fb6b8340f1755a6a7d74.jpg',
    liveUrl: 'https://mahmoud-yousefi.github.io/portfolio/',
    codeUrl: 'https://github.com/mahmoud-yousefi/portfolio',
  },
];

const ProjectCard: FC<any> = forwardRef(({ project, index }, ref: any) => (
  <div
    ref={ref}
    className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-[fadeInUp_0.8s_ease-out_forwards]"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 p-2 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a
          href={project.liveUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> Live Demo
        </a>
        <a
          href={project.codeUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> Source Code
        </a>
      </div>
    </div>
  </div>
));

const Projects = () => {
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
            0% { transform Regex: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
            50% { transform: scale(1.03); box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); }
            100% { transform: scale(1); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
          }
          @keyframes textGlow {
            0% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
            50% { text-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
            100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8 sm:mb-12 lg:mb-16 animate-[fadeInUp_0.8s_ease-out] animate-[textGlow_3s_ease-in-out_infinite]"
          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              ref={(el) => cardRefs.current.set(project.id, el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;