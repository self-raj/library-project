import { useState } from "react";
import { useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";

function SearchBook() {
    const books = useSelector((state) => state.books);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");


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
    <div className="w-full px-6 py-10 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Browse Books</h2>
        <p className="text-gray-600 mt-2">
          Discover your next great read from our extensive collection
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto mb-8">
        {/* Search Input */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full px-10 py-3 rounded-md border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
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

      {/* Filtered Book Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <div key={index} className="p-4 shadow border rounded bg-gray-50">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-700">by {book.author}</p>
              <p className="text-xs text-gray-600">{book.genre} | ⭐ {book.rating}</p>
              <p className="text-sm mt-2 text-gray-800">{book.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No books found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchBook;
