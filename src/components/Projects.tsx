import { projects } from '../data/projects';
import type { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a href={project.liveUrl} className="text-blue-600 hover:underline">
          Live Demo
        </a>
        <a href={project.codeUrl} className="text-blue-600 hover:underline">
          Source Code
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;