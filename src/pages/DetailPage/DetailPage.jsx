import React, { useEffect, useState } from "react";
import "./DetailPage.css";
import { BASE_URL, IMG_BASE_URL, API_KEY } from "../../app/API/config";
import useFetch from "../../hooks/useFetch";
import { fetchLogo } from "../../helpers/fetch";
function DetailPage({ movieId }) {
  let logo = fetchLogo(movieId);
  // const { movieData, movieLoading, movieError } = useFetch(
  //   `${BASE_URL}movie/${movieId}/images?api_key=${API_KEY}`
  // );

  useEffect(() => {}, []);

  return (
    <>
      <div id="detailContainer">
        <div id="detailPoster">
          <img
            id="detailImg"
            src={`https://www.themoviedb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg`}
            alt=""
          ></img>
          <div id="gradient"></div>
        </div>
        {movieId ? logo : null}
        <div id="detailInfos">Desc</div>
      </div>
    </>
  );
}

export default DetailPage;
