import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, removeState, asyncSearch } from "../../reducers/filterSlice";
import { IMG_BASE_URL } from "../../app/API/config";

function SearchResult() {
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    let query = searchParams.get("q");
    if(!query) {
      dispatch(removeState());
      return;
    }
    const searchDebounce = setTimeout(() => {
      dispatch(asyncSearch(query));
    }, 1500);
    return () => {
      clearTimeout(searchDebounce);
    };
  }, [searchParams]);

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {movies?.map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={`${IMG_BASE_URL}/${item.poster_path}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default SearchResult;
