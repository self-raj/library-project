import { useSelector } from "react-redux";
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

function Popular() {
  const books = useSelector((state) => state.books);
  const popularBooks = books.filter((book) => book.isPopular === true);

  return (
    <section className="p-9">
      <h2 className="text-3xl font-bold mb-4">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-5">
        {popularBooks.map((book) => (
          <div
            key={book.id}
            className="rounded border transition-all hover:shadow-lg duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div
              className={`font-bold h-40 rounded shadow flex justify-center items-center ${
                genreColors[book.genre] || "bg-gray-100"
              }`}
            >
              {book.title}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{book.title}</h3>
              <p className="text-sm text-gray-700">by {book.author}</p>

              <div className="flex justify-between mt-2 text-sm">
                <div>{book.genre}</div>
                <div>⭐ {book.rating}</div>
              </div>

              <p className="text-sm mt-2 text-gray-800">
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
    </section>
  );
}

export default Popular;
