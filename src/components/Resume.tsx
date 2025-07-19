// import clsx from 'clsx';

const Resume: React.FC = () => {
  const skills = {
    'Programming & Scripting': ['JavaScript', 'TypeScript', 'PHP', 'Python'],
    'Frameworks & Libraries': ['ReactJS', 'Redux-Toolkit', 'Redux-Thunk', 'React Hooks', 'Ant Design', 'Material UI', 'Node.js (Nest.js)', 'Next.js', 'Express.js', 'FastApi', 'DRF', 'Django', 'Flask'],
    'GIS Technologies': ['OpenLayers', 'Maplibre'],
    'Tools & Technologies': ['Git', 'GitHub', 'GitLab', 'Docker', 'MySQL', 'PostgreSQL', 'MongoDB', 'Prisma', 'TypeORM', 'SQLAlchemy', 'Alembic'],
    'Web Development': ['HTML & CSS', 'SASS', 'Less', 'TailwindCSS', 'Bootstrap', 'Flexbox', 'Grid', 'ESX (Ecmascript)'],
    'Testing & Validation': ['MVC', 'D3Js', 'Cypress Test', 'Yup', 'Zod'],
    'Other Skills': ['Solid Principles', 'REST API Development']
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Resume</h2>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <a
              href="/Mahmoud-Yousefi.pdf"
              download
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
            >
              Download Resume (PDF)
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-600">
              A passionate and skilled Full-Stack Developer with a strong background in Computer Science, currently pursuing a Master's degree in Algorithms and Theory of Computation. I have hands-on experience in building, optimizing, and maintaining complex web applications using modern technologies. I excel in developing user-friendly interfaces, implementing efficient solutions, and collaborating in team environments to drive project success.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
            <div className="mb-4">
              <h4 className="text-xl font-semibold">Master's Degree in Algorithms and Theory of Computation</h4>
              <p className="text-gray-600">Shahed University, Tehran, Iran | 2024 – Present</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h4>
              <p className="text-gray-600">Shahed University, Tehran, Iran | Graduated 2024</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h3>
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800">{category}</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
            <div>
              <h4 className="text-xl font-semibold">Front-End Developer</h4>
              <p className="text-gray-600">Hoshan Kavosh Borna, Tehran, Iran | March 2024 – Present</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Designed and implemented a modern UI for Bizagi workflow engine, enabling intuitive user interaction for internal business processes.</li>
                <li>Customized complex UI components to interact with organizational workflows and forms, improving user experience and operational efficiency.</li>
                <li>Developed and customized MapStore2, an open-source project, to meet internal project requirements, enhancing mapping functionalities.</li>
                <li>Created a template integrated with Apache NIFI to display and manage process groups in a table format.</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Languages</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>English: Upper-intermediate</li>
              <li>Persian: Native</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;