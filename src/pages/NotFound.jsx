
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <img
          src="/lovable-uploads/Images/Error Alien Spaceship.png"
          alt="404 Not Found"
          className="mb-4"/>
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
