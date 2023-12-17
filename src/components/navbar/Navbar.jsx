import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material";
import Login from "../login";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// import logo from "";

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

export default function Navbar({ navArrayLinks }) {
  // onclick recibe una funcion
  const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
          >
            <img
              // src={logo}
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
            // noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            Luigi's Menu
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {navArrayLinks.map((item) => (
            <Button
              color="inherit"
              key={item.title}
              component={NavLink}
              to={item.path}
              edge="start"
            >
              {item.title}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Drawer
        open={open} ///*el open toma true o false*/}
        anchor="bottom"
        onClose={() => setOpen(false)}
      >
        <Login />
      </Drawer>
    </>
  );
}