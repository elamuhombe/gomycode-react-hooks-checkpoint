import React from "react";

const FilterMovie = ({ setFilterTitle, setFilterRating }) => {
  // Function to handle changes in the title input
  const handleTitleChange = (e) => {
    // Update the filter title state with the entered value
    setFilterTitle(e.target.value);
  };

  // Function to handle changes in the rating input
  const handleRatingChange = (e) => {
    // Update the filter rating state with the entered value
    setFilterRating(e.target.value);
  };

  return (
    <div>
      {/* Input for filtering by movie title */}
      <input
        type="text"
        placeholder="Search Title"
        onChange={handleTitleChange}
        className="searchTitle"
      />

      {/* Input for filtering by movie rating */}
      <input
        type="number"
        placeholder="Search Ratings"
        min="1"
        max="5"
        onChange={handleRatingChange}
        className="searchRating"
      />
    </div>
  );
};

export default FilterMovie;
