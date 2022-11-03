import React, { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Preview from "../../components/Preview/Preview";
import useFetch from "../../hooks/useFetch";
import "./MainPage.css";

function MainPage() {
  const { data, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c3d0338c685314581c50db43fa93a914&with_genres=14"
  );
  console.log(`genres list request`, data);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Preview />
      </div>
      {/* <MovieList imgFiles={imgFile}/> */}
      <div className="movie-list-wrapper">
        <MovieList genresId={"28"} />
        <MovieList genresId={"878"} />
      </div>
    </div>
  );
}

export default MainPage;
