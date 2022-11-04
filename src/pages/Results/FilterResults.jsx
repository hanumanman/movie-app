import React, { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Link, useParams } from "react-router-dom";
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
    <ImageList cols={3}>
      {movies?.map((item, index) => (
        <ImageListItem key={index}>
          <Link to={`/movie/${item.id}`}>
            <img
              src={`${IMG_BASE_URL}/${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
          </Link>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default FilterResults;

//sx={{ width: 500, height: 450 }} rowHeight={164}
