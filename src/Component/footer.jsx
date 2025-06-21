// import { Star } from 'lucide-react';

import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-20 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Have a Book to Share?
      </h2>
      <p className="text-lg sm:text-xl mb-8">
        Join our community of book lovers and add your favorite reads to our
        growing library.
      </p>
      <div className="  flex justify-center">
        {" "}
        <Link to="/addbook" className="bg-white text-indigo-600 font-medium  flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
          {/* <Star className="w-5 h-5" /> */}
          Add Your Book
        </Link>
      </div>
    </div>
  );
}

export default Footer;
