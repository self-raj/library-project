import { useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addBook } from "./Utils/BookSlice";
import { useNavigate } from "react-router-dom";


function AddBook() {
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState(5);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // loader start

    setTimeout(() => {
      const newBook = {
        title,
        author,
        genre: category,
        rating: parseFloat(rating),
        description,
      };

      dispatch(addBook(newBook));
      navigate("/browse");

      // Reset form
      setTitle("");
      setAuthor("");
      setCategory("");
      setRating(5);
      setDescription("");

      setLoading(false); // loader stop (optional, kyunki navigate ho gaya)
    }, 1500); // delay 1.5 second
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-200 flex flex-col items-center px-4 py-10">
        <div className="w-12 h-12 bg-purple-100 flex items-center justify-center  rounded-full mb-4">
          <span className="text-purple-600 text-2xl">📖</span>
        </div>
        <h2 className="text-3xl font-bold mb-2">Add New Book</h2>
        <p className="text-gray-900 text-center max-w-md mb-8 text-md">
          Share your favorite book with our community. Fill out the form below
          to add it to our library.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl  p-6 w-full max-w-xl space-y-5  [box-shadow:0_4px_6px_-1px_rgba(0,0,0,0.8)]"
        >
          <div>
            <label className="block text-sm font-medium mb-1">
              Book Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the book title"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Author *</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter the author's name"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category *</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            >
              <option value="">Select a category</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Sci Fi</option>
              <option>Biography</option>
              <option>Self Help</option>
              <option>Romance</option>
              <option>Mystery</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Rating *</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                step="0.1"
                className="w-16 border rounded px-2 py-1"
                required
              />
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-gray-600">{rating}/5.0</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Description *
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter a brief description of the book"
              className="w-full border rounded px-4 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            ></textarea>
          </div>
          <div className="flex gap-4 justify-between">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-purple-600 text-white font-medium px-6 py-2 rounded hover:bg-purple-700 w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  <span>📘</span> Add Book
                </>
              )}
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setAuthor("");
                setCategory("");
                setRating(5);
                setDescription("");
              }}
              className="bg-gray-100 text-gray-800 px-6 py-2 rounded hover:bg-gray-200 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddBook;
