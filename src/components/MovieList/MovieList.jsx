import React from "react";
import "./MovieList.css";

const movies = [{ name: "movie1" }, { name: "movie2" }, { name: "movie3" }];

function MovieList() {
  return (
    <>
      <ul className="movieList">
        {movies.map((movie, index) => (
          <li key={`movie${index}`}>
            <div className="movieListItem">{movie.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
