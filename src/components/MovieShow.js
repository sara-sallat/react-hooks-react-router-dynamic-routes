import React from "react";
import { useParams } from "react-router";

const MovieShow = ({ movies }) => {
  const { movieId } = useParams();
  return <h2>{movies[movieId].title}</h2>;
};

export default MovieShow;