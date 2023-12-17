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

const Signup = () => {
  // const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <Avatar
            sx={{
              bgcolor: "#FF9B50",
              margin: "0% 0% 0% 42%",
              width: "75px",
              height: "75px",
            }}
          ></Avatar>
          <h2 sx={{ margin: 0 }}>Sign Up</h2>
          <Typography variant="body1">
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
            sx={{ mt: "20px" }}
            color="tercero"
            component="a"
            href="/home"
          >
            Sign up
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Signup;