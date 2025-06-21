

function Home() {
 
  return (
    <div className="min-h-1/2 bg-gray-50">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                LibraryHub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Discover your next favorite book in our vast digital library.
              Explore thousands of titles across all genres and connect with
              fellow readers.
            </p>
           
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;
