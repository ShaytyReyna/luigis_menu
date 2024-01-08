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
  Box,
} from "@mui/material";
import Select from "@mui/material/Select";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { useState } from "react";

const paperStyle = {
  width: "65vw",
  margin: "5px  auto",
  borderRadius: "10px",
  padding: "25px 20px",
  flexGrow: 1,
};

const avatarStyle = {
  backgroundColor: "#FF9B50",
  margin: "10px auto 0px auto",
  width: "60px",
  height: "60px",
};

export default function EditarDatos(params) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleToggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <Paper
      elevation={20}
      style={paperStyle}
    >
      <FormControl fullWidth>
        <Grid
          container
          spacing={2}
          sx={{ align: "center", pt: "5px" }}
        >
          <Grid
            item
            xs={12}
          >
            <Avatar
              style={avatarStyle}
              variant="rounded"
            >
              <EditRoundedIcon style={{ fontSize: "40px" }} />
            </Avatar>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ marginTop: "15px" }}
            >
              Editar datos
              {/* {editMode ? "Guardar datos" : "Editar datos"} */}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
          >
            <TextField
              label="Nombre"
              placeholder="Ingrese su(s) nombre(s)"
              sx={{ mt: "10px" }}
              variant="outlined"
              fullWidth
              disabled={!editMode}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <TextField
              label="Apellido Paterno"
              placeholder="Ingrese su apellido paterno"
              sx={{ mt: "10px" }}
              variant="outlined"
              fullWidth
              disabled={!editMode}
            />
          </Grid>
          <Grid
            item
            xs={6}
          >
            <TextField
              label="Apellido Materno"
              placeholder="Ingrese su apellido materno"
              sx={{ mt: "10px" }}
              variant="outlined"
              fullWidth
              disabled={!editMode}
            />
          </Grid>

          <Grid
            item
            xs={12}
          >
            <TextField
              fullWidth
              label="Correo electronico"
              placeholder="Ingrese su correo electronico"
              sx={{ mt: "10px" }}
              disabled={!editMode}
            />
          </Grid>

          <Grid
            item
            xs={12}
          >
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
                sx={{ margin: "0px 0px 0px auto" }}
                disabled={!editMode}
              />
              <FormControlLabel
                value="masculino"
                control={<Radio />}
                label="Masculino"
                sx={{ margin: "0px" }}
                disabled={!editMode}
              />
              <FormControlLabel
                value="otro"
                control={<Radio />}
                label="Otro"
                sx={{ margin: "0px auto 0px 0px " }}
                disabled={!editMode}
              />
            </RadioGroup>
          </Grid>

          <Grid
            item
            xs={6}
          >
            <FormControl
              variant="outlined"
              sx={{ m: 1 }}
              fullWidth
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
                disabled={!editMode}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={6}
          >
            <FormControl
              variant="outlined"
              sx={{ m: 1 }}
              fullWidth
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
                disabled={!editMode}
              />
            </FormControl>
          </Grid>

          <Grid
            item
            xs={12}
          >
            <Button
              type="button"
              variant="contained"
              sx={{
                margin: "20px 0px",
                color: "white",
                "&:hover": {
                  color: "#FFE569", // Cambia al color deseado al pasar el mouse
                },
              }}
              color="tercero"
              onClick={handleToggleEditMode}
            >
              {editMode ? "Guardar" : "Editar"}
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  );
}
