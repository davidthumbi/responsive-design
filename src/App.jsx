import popularMovies from "./data/data";
import MovieCard from "./components/MoviesCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 2xl:grid-cols-5 border-t-4 border-red-600">
        <div className="px-8 py-10 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt="netflix logo"
              className="h-10"
            />
            <img
              src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
              alt="best movies"
              className="mt-6 rounded-lg h-72 object-cover object-center shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover lg:hidden"
            />
            <h1 className="font-bold text-gray-900 mt-6 text-2xl sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              The best movies to watch.
              <br />
              <span className="text-red-700">Only on NETFLIX.</span>
            </h1>
            <p className="text-gray-600 mt-2 sm:mt-4 sm:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
              corrupti fuga earum doloremque maiores ut voluptatem nostrum rerum
              suscipit tempora nihil itaque, velit aliquid dicta assumenda
              molestias praesentium culpa architecto.
            </p>
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                className="bg-red-600 px-5 py-3 rounded-lg text-white uppercase shadow-lg inline-block font-semibold tracking-wider text-sm hover:bg-red-500 hover:-translate-y-0.5 transform focus:outline-none focus:ring focus:ring-offset-2 focus:ring-red-600 focus:ring-opacity-70 active:bg-red-900 transition sm:mt-6 sm:text-base"
                href="#"
              >
                Start Watching
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative 2xl:col-span-3">
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
            alt="best movies"
            className="absolute inset-0 w-full h-full object-cover object-center pt-20"
          />
        </div>
      </div>

      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h2 className="text-4xl text-red-600 font-semibold">Popular movies</h2>
        <p className="mt-2 text-gray-600">
          A selection of great movies to watch over the weekend.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {popularMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.city} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
