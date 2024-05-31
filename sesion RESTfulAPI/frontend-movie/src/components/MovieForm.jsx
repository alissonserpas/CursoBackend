import React, { useState, useEffect } from "react";

const MovieForm = ({ onSave, editMovie, onCancel }) => {
  const [movie, setMovie] = useState({
    title: "",
    protagonista: "",
    categoria: "",
    imagenUrl: "",
    videoUrl: "",
  });

  useEffect(() => {
    if (editMovie) {
      setMovie(editMovie);
    }
  }, [editMovie]);

  const handleInputChange = (e, field) => {
    setMovie({ ...movie, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(movie);
    setMovie({ title: "", protagonista: "", categoria: "", imagenUrl: "", videoUrl: "" });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-[#2c2c2e] border rounded shadow-md text-white">
      <h2 className="text-xl font-bold mb-4">
        {editMovie ? "Editar película" : "Añadir película"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Título"
          value={movie.title}
          onChange={(e) => handleInputChange(e, "title")}
          className="border rounded w-full py-2 px-3 text-gray-900"
        />
        <input
          type="text"
          placeholder="Protagonista"
          value={movie.protagonista}
          onChange={(e) => handleInputChange(e, "protagonista")}
          className="border rounded w-full py-2 px-3 text-gray-900"
        />
        <input
          type="text"
          placeholder="Categoría"
          value={movie.categoria}
          onChange={(e) => handleInputChange(e, "categoria")}
          className="border rounded w-full py-2 px-3 text-gray-900"
        />
        <input
          type="text"
          placeholder="Imagen URL"
          value={movie.imagenUrl}
          onChange={(e) => handleInputChange(e, "imagenUrl")}
          className="border rounded w-full py-2 px-3 text-gray-900"
        />
        <input
          type="text"
          placeholder="Video URL"
          value={movie.videoUrl}
          onChange={(e) => handleInputChange(e, "videoUrl")}
          className="border rounded w-full py-2 px-3 text-gray-900"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            {editMovie ? "Actualizar" : "Añadir"}
          </button>
          {editMovie && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MovieForm;






