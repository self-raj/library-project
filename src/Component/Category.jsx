import { useSelector } from "react-redux";

const categoryStyles = {
  Fiction: { color: "bg-red-100", iconColor: "bg-red-400" },
  "Non-Fiction": { color: "bg-blue-100", iconColor: "bg-blue-400" },
  Biography: { color: "bg-yellow-100", iconColor: "bg-yellow-400" },
  "Self-Help": { color: "bg-purple-100", iconColor: "bg-purple-400" },
  "Sci-Fi": { color: "bg-green-100", iconColor: "bg-green-400" },
  Mystery: { color: "bg-pink-100", iconColor: "bg-pink-400" },
  Romance: { color: "bg-indigo-100", iconColor: "bg-indigo-400" },
};

function Category() {
  const books = useSelector((state) => state.books);

  const genreCounts = books.reduce((acc, book) => {
    const genre = book.genre;
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});


  const categories = Object.keys(genreCounts).map((genre) => ({
    name: genre,
    books: genreCounts[genre],
    color: categoryStyles[genre]?.color || "bg-gray-100",
    iconColor: categoryStyles[genre]?.iconColor || "bg-gray-400",
  }));

  return (
    <div className="h-auto bg-gray-50 flex flex-col items-center px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Explore Book Categories
      </h1>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Dive into our carefully curated collection spanning multiple genres and
        topics
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-md transition ${cat.color}`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${cat.iconColor}`}
            >
              <span className="text-white text-xl">📖</span>
            </div>
            <h3 className="font-semibold text-md md:text-lg text-gray-800">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-600">
              {cat.books} {cat.books === 1 ? "book" : "books"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Category;
