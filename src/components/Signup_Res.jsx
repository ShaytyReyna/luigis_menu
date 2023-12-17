import {
  Avatar,
  Box,
  Chip,
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
import { useTheme } from "@mui/material/styles";
/*import para el select */
import Select from "@mui/material/Select";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import React, { useState } from "react";

/*Constantes para el Select*/
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Tradicional Mexicana",
  "Italiana",
  "Japonesa",
  "Bar-Restaurante",
  "Taqueria",
  "Comida corrida",
  "Variado",
];

/*funciones para el Select*/
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Signup_Res() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [open, setOpen] = useState(false); //false = no mostrarlo || true = mostrar

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
          margin: "20px 20px",
          mt: "5%",
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
          <h3 sx={{ margin: 0 }}>Restaurante</h3>
          <Typography variant="body1">
            {" "}
            Por favor llena este formulario para poder crear una cuenta
          </Typography>
        </Grid>

        <FormControl sx={{ mt: 5 }}>
          <TextField
            fullWidth
            label="Correo Electronico"
            placeholder="Ingrese su(s) nombre(s)"
            sx={{ mt: "20px" }}
          />
          <FormControl
            variant="outlined"
            sx={{ mt: 2 }}
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
            sx={{ mt: 2 }}
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
          <TextField
            fullWidth
            label="Nombre del Restaurante"
            sx={{ mt: "20px" }}
          />

          {/* Area  */}
          <Typography
            sx={{
              mt: 2,
              p: 2,
            }}
            variant="body2"
          >
            Introduzca el tipo de comida que ofrece:
          </Typography>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">
              Tipo de Comida
            </InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput
                  id="select-multiple-chip"
                  label="Tipo de Comida"
                />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
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
}

export default Signup_Res;
