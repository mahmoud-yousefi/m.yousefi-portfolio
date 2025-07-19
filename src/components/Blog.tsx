import clsx from 'clsx';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building a Custom UI for Bizagi Workflow with React and Redux',
      excerpt: 'Learn how I designed a modern, intuitive UI for the Bizagi workflow engine, leveraging React, Redux, and Material UI to enhance user interaction with enterprise workflows.',
      url: '#'
    },
    {
      id: 2,
      title: 'Integrating OpenLayers with React for Interactive Maps',
      excerpt: 'A deep dive into customizing MapStore2 with OpenLayers and React to create interactive GIS-based applications for enterprise use cases.',
      url: '#'
    },
    {
      id: 3,
      title: 'Best Practices for REST API Development with Nest.js',
      excerpt: 'Explore my approach to building scalable and maintainable REST APIs using Nest.js, with a focus on SOLID principles and TypeScript.',
      url: '#'
    },
    {
      id: 4,
      title: 'End-to-End Testing in React Apps with Cypress',
      excerpt: 'A guide to implementing robust end-to-end testing for React applications using Cypress, based on my experience testing enterprise systems.',
      url: '#'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href={post.url}
                className={clsx('text-blue-600 hover:underline', 'font-semibold')}
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;