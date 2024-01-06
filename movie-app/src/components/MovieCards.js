// Importing necessary dependencies and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import { Link } from "react-router-dom";
import "../styles.css"; // Additional styles

// Function to generate stars (including half stars) based on the 'stars' property
const getStars = (numStars) => {
  const fullStars = Math.floor(numStars);
  const hasHalfStar = numStars % 1 !== 0;

  // Creating an array of full stars based on the 'stars' property
  const starIcons = Array.from({ length: fullStars }, (_, index) => (
    <span key={index}>&#11088;</span>
  ));

  // Adding a half star if applicable
  if (hasHalfStar) {
    starIcons.push(
      <span key="half" style={{ position: "relative", top: "-0.5em" }}>
        &#11088;
      </span>
    );
  }

  return starIcons;
};

// MovieCards component
const MovieCards = ({ movie }) => {
  return (
    // Wrap the MovieCard with a Link component
    <Link to={`/trailer/${movie.id}`}>
      <div className="movie-card">
        <img src={movie.posterUrl} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}</p>
        {/* Call getStars function to display stars */}
        <div className="stars">{getStars(movie.rating)}</div>
      </div>
    </Link>
  );
};

export default MovieCards;