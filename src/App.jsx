import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <MainPage /> */}
      <DetailPage movieId={"634649"} />
    </React.Fragment>
  );
}

// TODO: NAVBAR, ROUTES & DETAIL PAGE
export default App;
