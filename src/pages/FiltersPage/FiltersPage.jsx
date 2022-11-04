import React, { useState, useEffect } from "react";
import "./FiltersPage.css";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "../../helpers/fetch";
import { filterByGenre } from "../../reducers/filterSlice";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";

function FiltersPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const genres = fetchGenres();

  return (
    <>
      <div>Filter by genres</div>
      <div>Dropdown genres</div>

      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: "block",
          }}
        >
          {genres?.map((genre) => (
            <MenuItem key={genre.id} onClick={handleCloseNavMenu}>
              <Link to={`genre/${genre.id}`}>{genre.name}</Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <div>Popular</div>
      <div>Top Rated</div>
      <Outlet />
    </>
  );
}

export default FiltersPage;
