import {
  Avatar,
  FormControlLabel,
  FormControl,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  Box,
} from "@mui/material";

import Select from "@mui/material/Select";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import Login from "./login";
import { Navigate } from "react-router-dom";

function LoginLayout() {
  const routeChange = () => {
    let path = `/login.jsx`;
    Navigate(path);
  };
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{ mt: "20px" }}
      color="tercero"
      onClick={routeChange}
    >
      Sign up
    </Button>
  );
}

const Signup = () => {
  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{
          p: "30px 20px ",
          with: 300,
          margin: "20px 20px",
          borderRadius: "10px",
        }}
      >
        <Grid sx={{ align: "center" }}>
          <Avatar sx={{ bgcolor: "#FF9B50", margin: "0% 0% 0% 45%" }}>
            <AddCircleIcon />
          </Avatar>
          <h2 sx={{ margin: 0 }}>Sign Up</h2>
          <Typography variant="caption">
            {" "}
            Por favor llena este formulario para poder crear una cuenta
          </Typography>
        </Grid>

        <FormControl sx={{ mt: 5 }}>
          <TextField
            fullWidth
            label="Nombre"
            placeholder="Ingrese su(s) nombre(s)"
            sx={{ mt: "20px" }}
          />
          <TextField
            fullWidth
            label="Apellido Paterno"
            sx={{ mt: "20px" }}
          />
          <TextField
            fullWidth
            label="Apellido Materno"
            sx={{ mt: "20px" }}
          />
          <TextField
            fullWidth
            label="Correo electronico"
            sx={{ mt: "20px" }}
          />
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              mt: 2,
            }}
          >
            Genero
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="femenino"
              control={<Radio />}
              label="Femenino"
            />
            <FormControlLabel
              value="masculino"
              control={<Radio />}
              label="Masculino"
            />
            <FormControlLabel
              value="otro"
              control={<Radio />}
              label="Otro"
            />
          </RadioGroup>
          {/* Area 
          <InputLabel id="demo-simple-select-label">Area habitual</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={area}
            label="Area"
            onChange={handleChange}
          >
            <MenuItem value={1}>Area limitrofe </MenuItem>
            <MenuItem value={2}>Centro</MenuItem>
            <MenuItem value={3}>Nor-Oriente</MenuItem>
            <MenuItem value={4}>Norte</MenuItem>
            <MenuItem value={5}>Oriente</MenuItem>
            <MenuItem value={6}>Poniente</MenuItem>
            <MenuItem value={3}>Sur</MenuItem>
          </Select> */}
          <TextField
            fullWidth
            label="Contraseña"
            sx={{ mt: "20px" }}
          />
          <TextField
            fullWidth
            label="confirmar contraseña"
            sx={{ mt: "20px" }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ mt: "20px" }}
            color="tercero"
          >
            Sign up
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Signup;
