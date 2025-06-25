const About: React.FC = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-600 mb-6">
          I'm a passionate web developer with experience in building modern, responsive web
          applications using technologies like React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          My journey in tech started with a curiosity for creating user-friendly interfaces, and I
          specialize in crafting clean, maintainable code following best practices like SOLID
          principles.
        </p>
        <p className="text-lg text-gray-600">
          When I'm not coding, you can find me exploring new technologies, contributing to open-source
          projects, or enjoying a good book.
        </p>
      </div>
    </div>
  </section>
);

export default About;