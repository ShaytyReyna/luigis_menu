import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box>
      <FormControl sx={{ mt: 5 }}>
        <TextField
          fullWidth
          label="Correo"
          placeholder="Ingrese su correo"
          sx={{ mt: "20px" }}
        />
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
      <TextField
        fullWidth
        label="Direccion"
        placeholder="Ingrese su direccion"
        sx={{ mt: "20px" }}
      />
      <TextField
        fullWidth
        label="Direccion 2"
        placeholder="Ingrese su direccion"
        sx={{ mt: "20px" }}
      />
      <TextField
        fullWidth
        label="Ciudad"
        placeholder="Ingrese su ciudad"
        sx={{ mt: "20px" }}
      />
      <FormControl sx={{ m: 1 }}>
        <InputLabel id="select-area-label"> Estado</InputLabel>
        <Select
          labelId="select-estado"
          id="estado-select"
          label="Estado habitual"
          defaultValue=""
        >
          <MenuItem
            value={1}
            key={1}
          >
            Aguascalientes{" "}
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Baja California
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Baja California Sur
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Campeche
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Chiapas
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Chihuahua
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Ciudad de Mexico
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Coahuila
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Colima
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Durango
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Estado de Mexico
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Guanajuato
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Guerrero
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Hidalgo
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Jalisco
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Michoacan
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Morelos
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Nayarit
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Nuevo Leon
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Oaxaca
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Puebla
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Queretaro
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Quintana Roo
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            San Luis Potosi
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Sinaloa
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Sonora
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Tabasco
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Tamaulipas
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Tlaxcala
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Veracruz
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Yucatan
          </MenuItem>
          <MenuItem
            value={2}
            key={2}
          >
            Zacatecas
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
