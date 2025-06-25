import { Link } from "react-router-dom";

const Hero: React.FC = () => (
  <section className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-600 mb-6">
        I'm a developer passionate about building modern web applications.
      </p>
      <Link
        to="/contact"
        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export default Hero;