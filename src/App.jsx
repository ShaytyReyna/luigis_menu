import { Login } from "@mui/icons-material";
import tarjetaResUsuR from "./components/tarjetaResUsuR";

import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import React from "react";
import "./App.css";
import Signup from "./components/signup";

function App() {
  return (
    // <Container>
    //   <h1>App</h1>
    //   <Typography
    //     variant="h1"
    //     gutterBottom
    //   >
    //     App h1 con componente
    //   </Typography>
    //   <Button variant="contained">Prueba boton</Button>

    //   <Button
    //     variant="contained"
    //     color="secondary"
    //   >
    //     boton
    //   </Button>
    //   <Button
    //     variant="contained"
    //     color="error"
    //   >
    //     boton error
    //   </Button>

    //   <Box
    //     sx={{
    //       border: 2,
    //       p: 5,
    //       margin: 2,
    //       bgcolor: "primary",
    //       borderColor: "peru",
    //     }}
    //     component="span"
    //   >
    //     fldaspdc
    //   </Box>
    //   <tarjetaResUsuR />
    // </Container>

    <div className="App">
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
