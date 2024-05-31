import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesList from "./components/Movies";
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleEdit = (movie) => {
    setEditMovie(movie);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/movies/${id}`, { method: "DELETE" })
      .then(() => setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id)));
  };

  const handleSave = (movie) => {
    if (movie.id) {
      fetch(`http://localhost:5000/movies/${movie.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      })
        .then((response) => response.json())
        .then((updatedMovie) => {
          setMovies((prevMovies) => 
            prevMovies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
          );
          setEditMovie(null);
        });
    } else {
      fetch("http://localhost:5000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movie),
      })
        .then((response) => response.json())
        .then((newMovie) => {
          setMovies((prevMovies) => [...prevMovies, newMovie]);
          setEditMovie(null);
        });
    }
  };

  const handleCancel = () => {
    setEditMovie(null);
  };

  return (
    <Router>
      <div className="container mx-auto p-4 bg-[#1c1c1e] min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                movies={movies}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            }
          />
          <Route
            path="/add"
            element={<MovieForm onSave={handleSave} editMovie={editMovie} onCancel={handleCancel} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




