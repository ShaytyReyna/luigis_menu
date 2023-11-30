import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import * as React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

//componentes
import Signup from "./components/signup";
import Login from "./components/login";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home";
import RemplazoSignUp from "./pages/RemplazoSignUp";

// import { Routes } from "react-router-dom";

const navArrayLinks = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Log in",
    path: "/Login",
  },
  {
    title: "Sign up",
    path: "/SignUp",
  },
];

function App() {
  const [showSignup, setShowSignup] = React.useState(true);
  return (
    <>
      <Navbar
        navArrayLinks={navArrayLinks}
        sx={{
          posittion: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route
            path="/home"
            element={<Home />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/SignUp"
            element={<Signup />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
