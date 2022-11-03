import React, { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre, removeState } from "../../reducers/filterSlice";
import { IMG_BASE_URL } from "../../app/API/config";

function FilterResults() {
  const genreId = useParams();
  const movies = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("dispatch", genreId);
    dispatch(filterByGenre(genreId));

    return () => {
      dispatch(removeState());
    };
  }, [dispatch, genreId]);

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

export default FilterResults;
