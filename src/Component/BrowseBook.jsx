import { useSelector } from "react-redux";
import Navbar from "./Navbar";
// import SearchBook from "./SearchBook";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const genreColors = {
  Fiction: "bg-red-100",
  "Non-Fiction": "bg-blue-400",
  Biography: "bg-yellow-100",
  "Self-Help": "bg-purple-100",
  "Sci-Fi": "bg-green-100",
  Mystery: "bg-pink-100",
  Romance: "bg-indigo-100",
};

function BrowseBook() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const books = useSelector((state) => state.books);

  // Filter Logic
  const filteredBooks = books.filter((book) => {
    const matchesQuery =
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase());

    const matchesCategory =
      category === "All Categories" || book.genre === category;

    return matchesQuery && matchesCategory;
  });

  return (
    <div>
      <Navbar />
      <div>
        <div className="max-w-4xl mx-auto text-center mb-8 mt-5">
          <h2 className="text-3xl font-bold text-gray-900">Browse Books</h2>
          <p className="text-gray-600 mt-2">
            Discover your next great read from our extensive collection
          </p>
        </div>

        <div className="flex flex-col  sm:flex-row items-center gap-4 max-w-3xl mx-auto mb-8">
          {/* Search Input */}
          <div className="relative md:w-full w-[89%]">
            <input
              type="text"
              placeholder="Search by title or author..."
              className="w-full px-10 py-3 rounded-md border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IoSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>

          {/* Category Dropdown */}
          <select
            className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All Categories</option>
            <option>Fiction</option>
            <option>Non-Fiction</option>
            <option>Biography</option>
            <option>Sci-Fi</option>
            <option>Mystery</option>
            <option>Romance</option>
            <option>Self-Help</option>
          </select>
        </div>
      </div>

      <section className="p-6">
        <h2 className="text-2xl font-bold my-6">Browse All Books</h2>
        {filteredBooks.length === 0 ? (
          <p className="text-gray-500">
            No books available yet. Please add some.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-x-4 space-y-4 ">
            {filteredBooks.map((book, index) => (
              <div className="rounded-2xl  border hover:[box-shadow:0_4px_11px_2px_rgba(0,0,0,0.8)]   duration-300 ease-in-out transform  hover:-translate-y-1 ">
                <div
                  key={index}
                  className={` font-bold h-40 rounded-tl-2xl rounded-tr-2xl   transition  flex justify-center items-center ${
                    genreColors[book.genre] || "bg-gray-100"
                  } `}
                >
                  {book.title}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{book.title}</h3>
                  <p className="text-sm text-gray-700">by {book.author}</p>

                  <div className="flex justify-between">
                    {" "}
                    <div>{book.genre} </div> <div>⭐{book.rating}</div>
                  </div>

                  <p className="text-sm mt-2 text-gray-800 max-h-23">
                    {book.description.length > 80
                      ? `${book.description.substring(0, 80)}...`
                      : book.description}
                  </p>
                  <Link
                    to={`/browse/${book.id}`}
                    className="block text-center p-2 rounded-2xl bg-blue-600 w-full mt-4 text-white hover:bg-blue-700 transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default BrowseBook;
