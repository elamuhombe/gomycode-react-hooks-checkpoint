import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AddMovie = ({ onAddMovie }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
  });

  // Handle change for form input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update state with the new form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if any of the required fields are empty
    if (
      !formData.title ||
      !formData.description ||
      !formData.posterUrl ||
      !formData.rating
    ) {
      // You can display an error message, show a notification, or take any other appropriate action
      console.log("Please fill in all fields before submitting.");
      return;
    }

    // Create a new movie object using the form data
    const newMovie = {
      title: formData.title,
      description: formData.description,
      posterUrl: formData.posterUrl,
      rating: formData.rating,
    };

    // Call the provided callback function to handle the new movie data
    onAddMovie(newMovie);

    // Clear the form after submission
    setFormData({
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
    });
  };

  // Log when the component is rendered
  console.log("Rendering AddMovie component");

  return (
    <div className="add-movie">
      {/* Movie Form */}
      <Form className="addMovie" onSubmit={handleSubmit}>
        <h5>Add New Movie</h5>

        {/* Title Input */}
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Description Input */}
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Poster URL Input */}
        <Form.Group>
          <Form.Label>PosterURL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter poster URL"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Rating Input */}
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Submit Button */}
        <Button variant="primary" type="submit">
          Add Movie
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
