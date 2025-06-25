import { skills } from '../data/projects';
import type { Skill } from '../types';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center bg-white rounded-lg shadow-md p-4">
    <img src={skill.icon} alt={skill.name} className="w-10 h-10 mr-4" />
    <span className="text-lg font-semibold text-gray-900">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;