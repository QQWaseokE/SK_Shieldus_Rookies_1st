import React from "react";

function MovieList({ movies, onMovieSelect }) {
  return (
    <div>
      {movies.map((m) => (
        <div key={m.id} onClick={() => onMovieSelect(m)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            alt={m.title}
          />
          <h3>
            제목 : {m.title} ({m.original_language})
          </h3>
          <p>최초 상영일 : {m.release_date}</p>
          <p>Popularity : {m.popularity}</p>
          <p>
            투표수 : {m.vote_count} / 평점 : {m.vote_average}
          </p>
          <p>
            ------------------------------------------------------------------------------
          </p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
