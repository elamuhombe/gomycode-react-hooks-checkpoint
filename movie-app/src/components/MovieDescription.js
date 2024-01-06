import React from "react";

const MovieDescription = ({ movie }) => {
  // Check if the movie prop is available
  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description: {movie.description}</p>
      <p>Rating: {movie.rating}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default MovieDescription;