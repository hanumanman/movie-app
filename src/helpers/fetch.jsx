import React, { useEffect, useState } from "react";

import { BASE_URL, IMG_BASE_URL, API_KEY } from "../app/API/config";
import useFetch from "../hooks/useFetch";

const enLogoFilter = (data) => {
  const enLogo = data?.filter((logo) => logo.iso_639_1 === "en");
  return enLogo;
};

export const fetchLogo = (movieId) => {
  if (movieId) {
    const { data, loading, error } = useFetch(
      `${BASE_URL}movie/${movieId}/images?api_key=${API_KEY}`
    );
    let logos = enLogoFilter(data?.logos) || [];
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    return (
      <img
        className="detailLogo"
        src={`${IMG_BASE_URL}${logos[0]?.file_path}`}
        alt="title logo"
      />
    );
  }
  return null;
};
