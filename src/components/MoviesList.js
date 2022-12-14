import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

const MoviesList = ({ movies }) => {
  const { url } = useRouteMatch();
  return (
    <ul>
      {Object.keys(movies).map((movieKey) => (
        <li key={movieKey}>
          <Link to={`${url}/${movieKey}`}>{movies[movieKey].title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;