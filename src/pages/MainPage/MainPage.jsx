import React, { useEffect } from "react";
import NavBar from "../../components/Header/navbar/NavBar";
import MovieList from "../../components/MovieList/MovieList";
import Preview from "../../components/Preview/Preview";
import { API_KEY } from "../../app/API/config";
import apiService from "../../app/API/APIService";

function MainPage() {
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await apiService.get(
          `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`
        );
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, []);

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
