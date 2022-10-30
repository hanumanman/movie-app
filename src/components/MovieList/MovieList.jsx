import React, { useEffect, useState } from "react";
import "./MovieList.css";
import useFetch from "../../hooks/useFetch";
import { API_KEY, BASE_URL } from "../../app/API/config";
import MovieCard from "../MovieCard/MovieCard";

function MovieList({ genresId }) {
  const [results, setResults] = useState([]);
  console.log(genresId);
  const { data, loading, error } = useFetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genresId}`
  );

  useEffect(() => {
    data ? setResults(data.results) : null;
    console.log(data);
    console.log(results);
  }, [data, results]);

  return (
    <>
      <ul className="movieList">
        {results &&
          results.map((result, index) => (
            <li key={`movie${index}`}>
              <MovieCard imgPath={result.poster_path} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default MovieList;
