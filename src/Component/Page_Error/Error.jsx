import { Link } from 'react-router-dom';

function Error () {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-2xl mt-2 text-gray-700">Page Not Found</p>
      <p className="text-gray-500 mt-2 mb-6 text-center">Sorry, the page you are looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error ;
