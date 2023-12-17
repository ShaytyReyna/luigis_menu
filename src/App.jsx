import { Container } from "@mui/material";
import * as React from "react";

import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

//componentes
import Signup from "./components/signup";
import Signup_Res from "./components/Signup_Res";

import Login from "./components/login";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import UsuAjeno from "./pages/UsuAjeno";
import SignupU from "./pages/SignUpU";

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
  {
    title: "Perfil ajeno",
    path: "/perfil",
  },
  {
    title: "Restaurante",
    path: "/SignUpRes",
  },
];

function App() {
  const [showSignup, setShowSignup] = React.useState(true);
  return (
    <div>
      <Navbar
        navArrayLinks={navArrayLinks}
        sx={{
          posittion: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Container
        sx={{
          mt: 5,
          width: "100%",
          top: 0,
          right: 0,
          bottom: 0,
          // backgroundImage: "url(/public/waves0.png)",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // height: "100vh",
        }}
      >
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
            // element={<Signup />}
            element={<SignupU />}
          />
          {/* Provicional en lo que averiguo como hacer dinamico los elementos de la pagina de usuarios */}
          <Route
            path="/perfil"
            element={<UsuAjeno />}
          />
          <Route
            path="/SignUpRes"
            element={<Signup_Res />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
