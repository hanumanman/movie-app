import React, { useEffect, useState } from "react";

import { BASE_URL, IMG_BASE_URL, API_KEY } from "../app/API/config";
import useFetch from "../hooks/useFetch";

const enFilter = (data) => {
  const enData = data?.filter((data) => data.iso_639_1 === "en");
  return enData;
};

export const fetchImg = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}/images?api_key=${API_KEY}`
    );
    let logos = enFilter(data?.logos) || [];
    let posters = data?.posters;
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div id="detailPoster">
        <img
          id="detailImg"
          src={posters ? `${IMG_BASE_URL}${posters[0]?.file_path}` : null}
          alt=""
        ></img>
        <div id="gradient"></div>

        <img
          className="detailLogo"
          src={logos ? `${IMG_BASE_URL}${logos[0]?.file_path}` : null}
          alt="title logo"
        />
      </div>
    );
  }
  return null;
};

export const fetchDescription = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
    );

    let overview = data?.overview;
    let genres = data?.genres;
    let release = data?.release_date;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div>
        <div>Overview: {overview}</div>
        {genres?.map((genre) => (
          <span>{genre.name} </span>
        ))}
        <div>Release Date: {release}</div>
      </div>
    );
  }
};

export const fetchCredit = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
    );

    let cast = data?.cast;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <div>
        {cast?.slice(0, 5).map((member) => (
          <span>{member.name} </span>
        ))}
      </div>
    );
  }
};

export const fetchGenres = () => {
  const { data, loading, error } = useFetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  let genres = data?.genres;
  // console.log(genres);
  return genres;
};
