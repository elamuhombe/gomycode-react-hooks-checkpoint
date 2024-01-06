import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import FilterMovie from "./components/FilterMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Trailer from "./components/Trailer";

// App component
const App = () => {
  // State for filtering movies based on title
  const [filterTitle, setFilterTitle] = useState("");

  // State for filtering movies based on rating
  const [filterRating, setFilterRating] = useState("");

  // State for managing the list of movies
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "KungFu Master",
      description:
        "The lives of two martial arts instructors are upended when they become the targets of a gang, who decide to assassinate the brother and sister duo.",
      posterUrl: "./posters/kungfu-master.jpeg",
      trailerUrl: "https://youtu.be/c5qZqaVjm4Q",
      rating: 4.5,
      stars: 4.5,
    },
    {
      id: 2,
      title: "Office Race",
      description:
        "An unmotivated office drone refuses to go the extra mile at work but is willing to go 26.2 miles to one-up his insufferable boss.",
      posterUrl: "/posters/med_office_race.jpg",
      trailerUrl: "https://youtu.be/ufZqFX2Z814",
      rating: 5.5,
      stars: 5.5,
    },
    {
      id: 3,
      title: "The Sandlot",
      description:
        "Scotty, a young boy, moves into a new neighbourhood, where he decides to join the local baseball team. However, with his new friends, he experiences a series of adventures that he never imagined",
      posterUrl: "/posters/baseball.jpg",
      trailerUrl: "https://youtu.be/pvOVY_4VweI",
      rating: 4.5,
      stars: 4.5,
    },
  ]);

  // Function to add a new movie to the list
  const addMovie = (newMovie) => {
    // Generate a unique id for the new movie
    const newId =
      movies.length > 0 ? Math.max(...movies.map((movie) => movie.id)) + 1 : 1;

    // Add the new movie with the generated id
    setMovies((prevMovies) => [...prevMovies, { ...newMovie, id: newId }]);
  };

  // Function to filter movies based on title and rating
  const filterByTitleAndRating = (title, rating) => (movie) => {
    const titleMatch = title
      ? movie.title.toLowerCase().includes(title.toLowerCase())
      : true;
    const ratingMatch = rating ? movie.rating >= parseInt(rating) : true;

    return titleMatch && ratingMatch;
  };

  // Filtered list of movies based on title and rating
  const filteredMovies = movies.filter(
    filterByTitleAndRating(filterTitle, filterRating)
  );

  return (
    <Router>
      <div className="container">
        {/* Website heading */}
        <h1>Movie App</h1>

        <Routes>
          {/* Route for displaying filtered movies and adding a new movie */}
          <Route
            path="/"
            element={
              <div className="col-md-6">
                {/* Component for filtering movies */}
                <FilterMovie
                  setFilterTitle={setFilterTitle}
                  setFilterRating={setFilterRating}
                />
                {/* Component for displaying movies */}
                <MovieList movies={filteredMovies} />
                {/* Right column: Adding a new movie */}
                <div className="col-md-6">
                  {/* Component for adding a new movie */}
                  <AddMovie onAddMovie={addMovie} />
                </div>
              </div>
            }
          />

          {/* Route for displaying movie trailers */}
          <Route path="/trailer/:id" element={<Trailer movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;