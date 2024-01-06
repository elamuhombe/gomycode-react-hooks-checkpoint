// Importing necessary dependencies
import React from "react";
import MovieCards from "./MovieCards"; // Importing the MovieCards component

// MovieList component
const MovieList = ({ movies }) => {
  // Render the list of movies using MovieCards component
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        // Rendering individual MovieCards for each movie with a unique key
        <MovieCards key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

// Exporting the MovieList component
export default MovieList;