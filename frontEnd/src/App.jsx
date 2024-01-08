
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
import { ReseñasProvider } from "./context/reseñasContext";

import { Container } from "@mui/material";
import * as React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";

//componentes
import Signup from "./pages/signup";
import Signup_Res from "./pages/Signup_Res";
import Login from "./pages/login";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import PerfilRes from "./pages/PerfilRestaurante";
import UsuPerfil from "./pages/PerfilU";
import RestaurantesGuardados from "./components/PerfilUsuario/RestaurantesGuardados";
import UsuarioAjeno from "./pages/UsuarioAjeno";

const navArrayLinks = [
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
  padding: 0,
  margin: 0,
};

function App() {
  const [showSignup, setShowSignup] = React.useState(true);
  return (
    <AuthProvider>
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
            element={<Home />}
            //element={<PerfilRes />}
          />
          <Route
            path="/Login"
            element={<Login />}
          />
          <Route
            path="/SignUp"
            element={<Signup />}
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
          <Route
            path="/PerfilRestaurante"
            element={<PerfilRes />}
          />
        </Routes>
      </Container>
    </div>
    </AuthProvider>
  );
}

export default App;
