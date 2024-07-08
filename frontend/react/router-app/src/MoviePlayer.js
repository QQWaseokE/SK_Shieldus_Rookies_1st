import React from "react";
import YouTube from "react-youtube";

function MoviePlayer({ videoKey }) {
  return <YouTube videoId={videoKey} />;
}

export default MoviePlayer;
