import React from "react";
import { IMG_BASE_URL } from "../../app/API/config";
import "./MovieCard.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function MovieCard({ imgPath }) {
  return (
    <Card sx={{ width: 200, height: 300, borderRadius: 0 }}>
      <CardContent sx={{ padding: 0 }}>
        <img src={`${IMG_BASE_URL}${imgPath}`} alt=""></img>
      </CardContent>
    </Card>
  );
}

export default MovieCard;
