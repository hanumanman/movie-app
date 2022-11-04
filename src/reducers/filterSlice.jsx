import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_KEY, BASE_URL } from "../app/API/config";

export const filterByGenre = createAsyncThunk(
  "filter/filterByGenre",
  async ({ genre }) => {
    const response = await axios.get(
      `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=${genre}`
    );
    return response.data.results;
  }
);

export const asyncSearch = createAsyncThunk(
  "filter/asyncSearch",
  async (query) => {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
    );
    console.log("url", `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1`);
    return response.data.results;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState: [],
  reducers: {
    removeState: (state) => {
      state = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filterByGenre.fulfilled, (state, { payload }) => {
      console.log(state);
      console.log(payload);
      return (state = payload);
    });
    builder.addCase(asyncSearch.fulfilled, (state, { payload }) => {
      console.log(state);
      console.log(payload);
      return (state = payload);
    });
    builder.addCase(filterByGenre.rejected, (state, action) => {
      console.log(action);
      console.log(state);
    });
    builder.addCase(filterByGenre.pending, (state, action) => {
      console.log(action);
      console.log(state);
    });
  },
});
export const { removeState } = filterSlice.actions;
export default filterSlice.reducer;
