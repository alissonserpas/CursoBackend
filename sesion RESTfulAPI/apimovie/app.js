const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static(__dirname));
app.use(express.json());

let movies = [];

try {
    const data = fs.readFileSync("movies.json");
    movies = JSON.parse(data);
} catch (err) {
    console.error("Error al cargar las películas:", err);
}

app.get("/movies", (req, res) => {
    res.json(movies);
});

app.get("/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const movie = movies.find((movie) => movie.id === movieId);
    movie ? res.json(movie) : res.status(404).send("No se encontró esa película");
});

app.post("/movies", (req, res) => {
    const newMovie = { id: movies.length + 1, ...req.body };
    movies.push(newMovie);
    saveMovies();
    res.status(201).json(newMovie);
});

app.put("/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const movieIndex = movies.findIndex((movie) => movie.id === movieId);
    if (movieIndex !== -1) {
        movies[movieIndex] = { ...movies[movieIndex], ...req.body };
        saveMovies();
        res.json(movies[movieIndex]);
    } else {
        res.status(404).send("No se encontró esa película");
    }
});

app.delete("/movies/:id", (req, res) => {
    const movieId = parseInt(req.params.id);
    const movieIndex = movies.findIndex((movie) => movie.id === movieId);
    if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
        saveMovies();
        console.log(`Película con id ${movieId} eliminada`);
        res.status(204).send("Película eliminada correctamente");
    } else {
        console.log(`Película con id ${movieId} no encontrada`);
        res.status(404).send("No se encontró esa película");
    }
});

function saveMovies() {
    try {
        fs.writeFileSync("movies.json", JSON.stringify(movies, null, 2));
    } catch (err) {
        console.error("Error al guardar las películas:", err);
    }
}

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
