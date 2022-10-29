import React from "react";
import NavBar from "../../components/Header/navbar/NavBar";
import MovieList from "../../components/MovieList/MovieList";
import Preview from "../../components/Preview/Preview";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Preview />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
      <MovieList />
    </div>
  );
}

export default MainPage;
