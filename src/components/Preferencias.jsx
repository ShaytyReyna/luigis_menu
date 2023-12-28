import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function Preferencias() {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleToggleSelect = () => {
    setIsDisabled((prev) => !prev);
  };
  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
      >
        Preferencias
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Área en la que habitualmente se ubica:{" "}
      </Typography>
      <FormControl
        sx={{ m: 1, width: "20vw", minWidth: 120 }}
        disabled={isDisabled}
      >
        <InputLabel id="select-area-label"> Área habitual</InputLabel>
        <Select
          labelId="select-area-label"
          id="area-select"
          label="Área habitual"
          defaultValue=""
          //   en defaultValue hayque meter una variable que se importa desde bd para que vea que area selecciono con anterioridad
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

      <Button
        onClick={handleToggleSelect}
        variant="contained"
        color="primary"
      >
        {isDisabled ? "Cambiar" : "Guardar"}
      </Button>
    </Box>
  );
}
