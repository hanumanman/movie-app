import React from "react";
import { IMG_BASE_URL } from "../../app/API/config";
import "./MovieCard.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MovieCard({ imgPath }) {
  return (
    <Card sx={{ width: 200, height: 300 }}>
      <CardMedia
        component="img"
        width="500"
        image={`${IMG_BASE_URL}${imgPath}`}
        alt="green iguana"
      />

      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default MovieCard;
