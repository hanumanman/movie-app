import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import NavBar from "./components/Header/navbar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { Route, Routes } from "react-router-dom";
import FiltersPage from "./pages/FiltersPage/FiltersPage";
import SearchResult from "./pages/Results/SearchResult";
import FilterResults from "./pages/Results/FilterResults";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:movieId" element={<DetailPage />} />
        <Route path="/browse" element={<FiltersPage />}>
          <Route path="genre/:genre" element={<FilterResults />} />
        </Route>
        <Route path="/search/*" element={<SearchResult />} />
      </Routes>
    </React.Fragment>
  );
}

// TODO: NAVBAR, ROUTES & DETAIL PAGE
export default App;
