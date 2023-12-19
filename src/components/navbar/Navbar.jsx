import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
  Grid,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Container,
  Box,
} from "@mui/material";
import Login from "../login";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import SentimentSatisfiedAltRoundedIcon from "@mui/icons-material/SentimentSatisfiedAltRounded";
import SearchIcon from "@mui/icons-material/Search";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const settings = [
  { title: "Perfil", path: "/perfil" },
  { title: "Log out", path: "/" },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const LuigisMenuStyle = {
  // display: { xs: "none", sm: "block" },
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
};

const NavButtonStyle = {
  backgroundColor: "#FFBB5C",
  "&:hover": {
    backgroundColor: "#FF9B50",
    color: "#C63D2F",
  },
};

export default function Navbar({ navArrayLinks }) {
  // onclick recibe una funcion
  const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        {/*  position="static" */}
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <IconButton
              edge="start"
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <img
                src="/public/LogoSinDestellos.png"
                alt="Logo"
                style={{
                  height: "100%",
                  width: "auto",
                  maxHeight: "50px",
                  maxWidth: "50px",
                  objectFit: "contain",
                }}
              />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              edge="start"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              Luigi's Menu
            </Typography>
            <Search
              sx={{
                flexGrow: 0,
                display: { xs: "none", md: "flex" },
                marginRight: 1,
              }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#88693d " }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  display: { xs: "block", md: "none" },
                }}
              >
                {navArrayLinks.map((item) => (
                  <MenuItem
                    key={item.title}
                    component={NavLink}
                    to={item.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      "&:hover": {
                        color: "#E25E3E", // Cambia al color deseado al pasar el mouse
                        // backgroundColor: "#f6c681", // Cambia al color deseado al pasar el mouse
                      },
                    }}
                  >
                    {item.title}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
            >
              <img
                src="/public/LogoSinDestellos.png"
                alt="Logo"
                style={{
                  height: "100%",
                  width: "auto",
                  maxHeight: "50px",
                  maxWidth: "50px",
                  objectFit: "contain",
                }}
              />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              component="div"
              edge="start"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Luigi's Menu
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {navArrayLinks.map((item) => (
                <Button
                  // color="inherit"
                  key={item.title}
                  component={NavLink}
                  to={item.path}
                  // style={NavButtonStyle}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    marginRight: 1,
                    color: "white",
                    display: "block",
                    "&:hover": {
                      color: "#E25E3E", // Cambia al color deseado al pasar el mouse
                      backgroundColor: "#f6c681", // Cambia al color deseado al pasar el mouse
                    },
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Menu perfil">
                <IconButton
                  size="large"
                  color="inherit"
                  sx={{ p: 0 }}
                  onClick={handleOpenUserMenu}
                >
                  <Avatar>
                    <SentimentSatisfiedAltRoundedIcon />
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    color="inherit"
                    key={setting.title}
                    component={NavLink}
                    to={setting.path}
                    onClick={handleCloseUserMenu}
                    sx={{
                      "&:hover": {
                        color: "#E25E3E", // Cambia al color deseado al pasar el mouse
                        // backgroundColor: "#f6c681", // Cambia al color deseado al pasar el mouse
                      },
                    }}
                  >
                    <Typography textAlign="center">{setting.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open} ///*el open toma true o false*
        anchor="bottom"
        onClose={() => setOpen(false)}
      >
        <Login />
      </Drawer>
    </div>
  );
}
