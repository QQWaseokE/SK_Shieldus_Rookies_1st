import React, { useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=9d2bff12ed955c7f1f74b83187f188ae&query=${encodeURIComponent(
        query
      )}`
    );
    setMovies(response.data.results);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <form onSubmit={searchMovies}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <MovieList movies={movies} onMovieSelect={setSelectedMovie} />
      )}
    </div>
  );
}

export default App;
