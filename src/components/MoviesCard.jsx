import React from "react";

export default function MoviesCard({ movie }) {
  return (
    <div className="flex items-center rounded-lg bg-gray-100 shadow-lg overflow-hidden">
      <img
        className="h-32 w-32 flex-shrink-0 object-cover object-center"
        src={movie.imageUrl}
        alt={movie.imageAlt}
      />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold text-red-600">
          {movie.city}
        </h3>

        <p className="text-gray-600">
          ${movie.averagePrice}
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="text-gray-800 hover:text-red-600 font-semibold text-sm"
          >
            Explore {movie.propertyCount} movies
          </a>
        </div>
      </div>
    </div>
  );
}
