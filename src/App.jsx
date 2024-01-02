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
import PerfilRes from "./pages/PerfilRestaurante";
import UsuPerfil from "./pages/PerfilU";
import SignupU from "./pages/SignUpU";
import RestaurantesGuardados from "./components/PerfilUsuario/RestaurantesGuardados";
import UsuarioAjeno from "./pages/UsuarioAjeno";

const navArrayLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Log in",
    path: "/Login",
  },
];

const containerStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: "100%",
  backgroundcolor: "black",
  padding: 0,
  margin: 0,
};
function App() {
  const [showSignup, setShowSignup] = React.useState(true);
  return (
    <div>
      <Navbar
        navArrayLinks={navArrayLinks}
        sx={{
          posittion: "static",
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Container
        style={containerStyle}
        maxWidth="x1"
      >
        <Routes>
          <Route
            path="/"
            // element={<Home />}
            element={<PerfilRes />}
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
            element={<UsuPerfil />}
          />
          <Route
            path="/SignUpRes"
            element={<Signup_Res />}
          />
          <Route
            path="/RestaurantesGuardados"
            element={<RestaurantesGuardados />}
          />
           <Route
            path="/UsuarioAjeno"
            element={<UsuarioAjeno />}
          />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
