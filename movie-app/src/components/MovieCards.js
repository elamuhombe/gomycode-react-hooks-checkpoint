// Importing necessary dependencies and styles
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
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
  // Styling for the card
  const cardStyle = {
    maxWidth: "540px",
  };

  return (
    <div>
      {/* Section heading */}
      <h2>Latest Releases</h2>

      <div className="row">
        {/* Movie Cards Column */}
        <div className="col-mb-3">
          {/* Individual Movie Card */}
          <div className="card" style={cardStyle}>
            <div className="row no-gutters">
              {/* Movie Poster */}
              <div className="col-md-4">
                <img
                  src={movie.posterUrl}
                  className="card-img"
                  alt="Movie Poster"
                />
              </div>

              {/* Movie Details */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Movie Title */}
                  <h5 className="card-title">{movie.title}</h5>

                  {/* Movie Description */}
                  <p className="card-text">
                    <small className="text-muted">{movie.description}</small>
                  </p>

                  {/* Movie Rating */}
                  <p>Rating: {movie.rating}</p>

                  {/* Displaying stars based on the rating */}
                  <p>{getStars(movie.rating)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the MovieCards component
export default MovieCards;
