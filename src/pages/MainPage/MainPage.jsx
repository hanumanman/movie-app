import React, { useEffect, useState } from "react";
import NavBar from "../../components/Header/navbar/NavBar";
import MovieList from "../../components/MovieList/MovieList";
import Preview from "../../components/Preview/Preview";
import useFetch from "../../hooks/useFetch";

function MainPage() {
  const { data, loading, error } = useFetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=c3d0338c685314581c50db43fa93a914&with_genres=14"
  );
  console.log(`genres list request`, data);
  return (
    <div>
      <NavBar />
      <Preview />
      {/* <MovieList imgFiles={imgFile}/> */}

      <MovieList genres={"Action"} />
      <MovieList genres={"Horror"} />
      <MovieList genres={"Animation"} />
    </div>
  );
}

export default MainPage;
