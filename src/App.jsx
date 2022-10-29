import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import NavBar from "./components/Header/navbar/NavBar";
import Preview from "./components/Preview/Preview";
import Carousel from "./components/Carousel/Carousel";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainPage />
    </React.Fragment>
  );
}

export default App;
