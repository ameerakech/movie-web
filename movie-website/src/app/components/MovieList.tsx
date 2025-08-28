'use client';

import useFetchMovies from '../hooks/useFetchMovies';
import Image from 'next/image';

export default function MovieList() {

  const { movies, loading, error } = useFetchMovies();

  if (loading) return <div>Loading movies...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Now Playing Movies</h1>
      {movies.length === 0 ? (
        <p className="text-center text-gray-600">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="border rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300"
            >
              {movie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-500 text-sm mb-1">
                  Release Date: {movie.release_date}
                </p>
 
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
