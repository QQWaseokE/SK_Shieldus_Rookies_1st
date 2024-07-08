import React, { useEffect, useState } from "react";
import axios from "axios";
import MoviePlayer from "./MoviePlayer";

function MovieDetail({ movie }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=9d2bff12ed955c7f1f74b83187f188ae`
      )
      .then((response) => setVideos(response.data.results))
      .catch((error) => console.error(error));
  }, [movie.id]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Overview : {movie.overview}</h3>
      <div>
        {videos.map((video) => (
          <MoviePlayer key={video.id} videoKey={video.key} />
        ))}
      </div>
    </div>
  );
}

export default MovieDetail;
