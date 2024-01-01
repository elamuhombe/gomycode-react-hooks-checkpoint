// Importing necessary dependencies
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

// App component
const App = () => {
  // State for managing the list of movies
  const [movies, setMovies] = useState([
    {
      title: "KungFu Master",
      description:
        "The lives of two martial arts instructors are upended when they become the targets of a gang, who decide to assassinate the brother and sister duo.",
      posterUrl: "./posters/kungfu-master.jpeg",
      rating: 4.5,
      stars: 4.5,
    },
    {
      title: "Office Race",
      description:
        "An unmotivated office drone refuses to go the extra mile at work but is willing to go 26.2 miles to one-up his insufferable boss.",
      posterUrl: "/posters/med_office_race.jpg",
      rating: 5.5,
      stars: 5.5,
    },
    {
      title: "The Sandlot",
      description:
        "Scotty, a young boy, moves into a new neighbourhood, where he decides to join the local baseball team. However, with his new friends, he experiences a series of adventures that he never imagined",
      posterUrl: "/posters/baseball.jpg",
      rating: 4.5,
      stars: 4.5,
    },
  ]);

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div className="container">
      {/* Left column: Displaying the list of movies */}
      <div className="col-md-6">
        <MovieList movies={movies} />
      </div>

      {/* Right column: Adding a new movie */}
      <div className="col-md-6">
        <AddMovie onAddMovie={addMovie} />
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
