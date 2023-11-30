import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Login from "../login";
import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "Log in",
    path: "#login",
  },
  {
    title: "Sign up",
    path: "#signup",
  },
];

export default function Navbar({ navArrayLinks }) {
  // onclick recibe una funcion
  const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            edge="start"
          >
            Luigi's Menu
          </Typography>
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
