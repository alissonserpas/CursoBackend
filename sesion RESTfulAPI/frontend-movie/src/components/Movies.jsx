import React, { useState } from "react";

const MoviesList = ({ movies, onEdit, onDelete, onSave, onCancel }) => {
  const [editMode, setEditMode] = useState(null);
  const [editedMovie, setEditedMovie] = useState({});

  const handleEditClick = (movie) => {
    setEditMode(movie.id);
    setEditedMovie(movie);
  };

  const handleInputChange = (e, field) => {
    setEditedMovie({ ...editedMovie, [field]: e.target.value });
  };

  const handleSaveClick = () => {
    onSave(editedMovie);
    setEditMode(null);
  };

  const handleCancelClick = () => {
    setEditMode(null);
    setEditedMovie({});
    onCancel();
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#ffd700]">Películas</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <li key={movie.id} className="p-4 border rounded-lg shadow-lg bg-[#2c2c2e]">
            {editMode === movie.id ? (
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={editedMovie.title}
                  onChange={(e) => handleInputChange(e, "title")}
                  className="border rounded w-full py-2 px-3 text-gray-900 mb-2"
                  placeholder="Título"
                />
                <input
                  type="text"
                  value={editedMovie.protagonista}
                  onChange={(e) => handleInputChange(e, "protagonista")}
                  className="border rounded w-full py-2 px-3 text-gray-900 mb-2"
                  placeholder="Protagonista"
                />
                <input
                  type="text"
                  value={editedMovie.categoria}
                  onChange={(e) => handleInputChange(e, "categoria")}
                  className="border rounded w-full py-2 px-3 text-gray-900 mb-2"
                  placeholder="Categoría"
                />
                <input
                  type="text"
                  value={editedMovie.imagenUrl}
                  onChange={(e) => handleInputChange(e, "imagenUrl")}
                  className="border rounded w-full py-2 px-3 text-gray-900 mb-2"
                  placeholder="URL de Imagen"
                />
                <input
                  type="text"
                  value={editedMovie.videoUrl}
                  onChange={(e) => handleInputChange(e, "videoUrl")}
                  className="border rounded w-full py-2 px-3 text-gray-900 mb-2"
                  placeholder="URL de Video"
                />
                <div className="flex space-x-2 mt-4">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                    onClick={handleSaveClick}
                  >
                    Guardar
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                    onClick={handleCancelClick}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center text-white">
                <h2 className="text-2xl font-semibold mb-2">{movie.title}</h2>
                <p className="mb-2">Protagonista: {movie.protagonista}</p>
                <p className="mb-2">Categoría: {movie.categoria}</p>
                <img
                  src={movie.imagenUrl}
                  alt={movie.title}
                  className="my-2 w-40 h-auto rounded-lg"
                />
                <div className="flex space-x-2 mt-4">
                  <a
                    href={movie.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                  >
                    Ver
                  </a>
                  <button
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-700"
                    onClick={() => handleEditClick(movie)}
                  >
                    Editar
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                    onClick={() => onDelete(movie.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;







