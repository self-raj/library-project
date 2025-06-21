import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
// import { ArrowLeft, Calendar, Tag, User } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";


function ViewDetails() {
  const { id } = useParams(); // get dynamic ID from URL
  const books = useSelector((state) => state.books);
 const book = books.find((b) => b.id === id); // match by index as ID

  if (!book) {
    return <p className="text-center mt-10 text-red-500">Book not found.</p>;
  }

  return (
   <>
   <Navbar/>
   
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <Link to="/browse" className="text-indigo-600 flex items-center gap-1 mb-6 text-sm">
          <FaArrowLeft size={16} /> Back to Browse
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl h-96 flex items-center justify-center text-white text-xl font-semibold shadow-lg">
            {book.title}
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
            <div className="flex items-center text-gray-600 mb-2">
              {/* <User size={16} className="mr-1" /> */}
              <span className="text-sm">{book.author}</span>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="text-yellow-500 text-lg">★★★★☆</div>
              <span className="font-semibold text-gray-800">{book.rating}</span>
              <span className="text-sm text-gray-500">(Based on reader reviews)</span>
            </div>

            <div className="flex gap-4 text-sm text-gray-700 mb-6">
              <div className="flex items-center gap-1">
                {/* <Tag size={16} /> */}
                <span>Category: <span className="font-medium">{book.genre}</span></span>
              </div>
              <div className="flex items-center gap-1">
                {/* <Calendar size={16} /> */}
                <span>Status: <span className="text-green-600 font-semibold">Available</span></span>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-1">Description</h2>
              <p className="text-gray-700 leading-relaxed">{book.description}</p>
            </div>

            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
                Add to Reading List
              </button>
              <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-200 transition">
                Share Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}

export default ViewDetails;
