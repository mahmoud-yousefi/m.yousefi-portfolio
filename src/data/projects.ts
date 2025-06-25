import type { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A web app built with React and Tailwind CSS.',
    image: '/assets/project1.jpg',
    liveUrl: 'https://example.com',
    codeUrl: 'https://github.com/<your-username>/project1',
  },
  // Add more projects
];

export const skills: Skill[] = [
  // { name: 'React', icon: '/assets/react.svg' },
  { name: 'React', icon: '/assets/react.svg' },
  { name: 'TypeScript', icon: '/assets/typescript.svg' },
  // Add more skills
];