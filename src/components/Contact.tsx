import clsx from 'clsx';

const Contact: React.FC = () => {
  const contactMethods = [
    { label: 'Email', value: 'your.email@example.com', url: 'mailto:your.email@example.com' },
    { label: 'LinkedIn', value: 'Your LinkedIn', url: 'https://linkedin.com/in/<your-username>' },
    { label: 'GitHub', value: 'Your GitHub', url: 'https://github.com/<your-username>' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out via the
            methods below!
          </p>
          <ul className="space-y-4">
            {contactMethods.map(({ label, value, url }) => (
              <li key={label}>
                <a
                  href={url}
                  className={clsx(
                    'text-blue-600 hover:underline',
                    'text-lg font-semibold'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}: {value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;