import React from "react";
import { Link, useParams } from "react-router-dom";

const Trailer = ({ movies }) => {
  // Get the movie ID from the route parameters
  const { id } = useParams();

  // Find the selected movie based on the ID
  const selectedMovie = movies.find((movie) => movie.id.toString() === id);

  // If the movie is not found, display a message
  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      {/* Link to navigate back to the home page */}
      <Link to="/" className="back-link">
        Back to Home
      </Link>

      {/* Movie title and trailer section */}
      <h2>{selectedMovie.title} Trailer</h2>
      <p>{selectedMovie.description}</p>

      {/* Embed the video player for the trailer (replace with your video player component) */}
      <iframe
        width="100%" // Making the video player responsive
        height="315"
        src={`https://www.youtube.com/embed/${selectedMovie.trailerUrl}`}
        title={`${selectedMovie.title} Trailer`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;