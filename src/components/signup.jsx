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
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Select from "@mui/material/Select";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";

const paperStyle = {
  width: 400,
  margin: "100px auto ",
  borderRadius: "10px",
  padding: "50px auto",
};
const avatarStyle = {
  backgroundColor: "#FF9B50",
  margin: "10px auto 0px auto",
  width: "60px",
  height: "60px",
};
const Signup = () => {
  // const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
    >
      <Grid sx={{ align: "center", pt: "5px" }}>
        <Avatar style={avatarStyle}>
          <AddCircleIcon style={{ fontSize: "50px" }} />
        </Avatar>
        <h2 sx={{ margin: 0 }}>Sign Up</h2>
        <Typography variant="body1">
          {" "}
          Por favor llena este formulario para poder crear una cuenta
        </Typography>
      </Grid>

      <FormControl sx={{ mt: 1 }}>
        <TextField
          fullWidth
          label="Nombre"
          placeholder="Ingrese su(s) nombre(s)"
          sx={{ mt: "10px" }}
        />
        <TextField
          fullWidth
          label="Apellido Paterno"
          placeholder="Ingrese su apellido paterno"
          sx={{ mt: "10px" }}
        />
        <TextField
          fullWidth
          label="Apellido Materno"
          placeholder="Ingrese su apellido materno"
          sx={{ mt: "10px" }}
        />
        <TextField
          fullWidth
          label="Correo electronico"
          placeholder="Ingrese su correo electronico"
          sx={{ mt: "10px" }}
        />
        <FormLabel
          id="demo-radio-buttons-group-label"
          style={{
            margin: "20px 0px 10px 0px",
            textAlign: "left",
          }}
        >
          Genero
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ margin: "0px auto" }}
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

        {/* Area  */}
        <Typography
          sx={{
            mt: 2,
            p: 2,
          }}
          variant="body2"
        >
          Introduzca el área en la que se ubica habitualmente:
        </Typography>
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="select-area-label"> Área habitual</InputLabel>
          <Select
            labelId="select-area-label"
            id="area-select"
            label="Área habitual"
            defaultValue=""
          >
            <MenuItem
              value={1}
              key={1}
            >
              Area limitrofe{" "}
            </MenuItem>
            <MenuItem
              value={2}
              key={2}
            >
              Centro
            </MenuItem>
            <MenuItem
              value={3}
              key={3}
            >
              Nor-Oriente
            </MenuItem>
            <MenuItem
              value={4}
              key={4}
            >
              Norte
            </MenuItem>
            <MenuItem
              value={5}
              key={5}
            >
              Oriente
            </MenuItem>
            <MenuItem
              value={6}
              key={6}
            >
              Poniente
            </MenuItem>
            <MenuItem
              value={7}
              key={7}
            >
              Sur
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl
          variant="outlined"
          sx={{ m: 1 }}
        >
          <InputLabel>Contraseña</InputLabel>
          <OutlinedInput
            id="contrasena"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl
          variant="outlined"
          sx={{ m: 1 }}
        >
          <InputLabel>Confirmar contraseña</InputLabel>
          <OutlinedInput
            id="contrasenaConfirmar"
            label="Confirmar contraseña"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            margin: "20px 0px",
            color: "white",
            "&:hover": {
              color: "#FFE569", // Cambia al color deseado al pasar el mouse
            },
          }}
          color="tercero"
          component="a"
          href="/"
        >
          Sign up
        </Button>
      </FormControl>
    </Paper>
  );
};

export default Signup;
