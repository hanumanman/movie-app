import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Button from "@mui/material/Button";
import NotflixLogo from "../../../assets/notflix.png";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import "./NavBar.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { OutlinedInput } from "@mui/material";

const pages = ["Home", "TV Show", "Movies", "New & Popular"];

function ResponsiveAppBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let q = searchParams.get("q");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ q: event.target.value });
  };

  React.useEffect(() => {
    if (!q) {
      navigate("/");
    } else {
      navigate("/search?q=" + q);
    }
  }, [searchParams]);
  return (
    <AppBar
      id="appBar"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <img id="nfLogo" src={NotflixLogo} alt="" />
          </Link>
          <Link to="/browse"> Browse</Link>
          <OutlinedInput
            style={{ color: "red", border: "1px solid red" }}
            placeholder="Search"
            value={q}
            defaultValue={``}
            onChange={handleSearch}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
