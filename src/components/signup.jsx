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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const Signup = () => {
  return (
    <Grid>
      <Paper
        elevation={20}
        sx={{ p: "30px 20px ", with: 300, margin: "20px 20px" }}
      >
        <Grid
          sx={{ align: "center" }}
          alignContent={"center"}
        >
          {/* revisar el align del avatar por que no jala?? */}
          <Avatar sx={{ bgcolor: "#FF9B50", align: "center" }}>
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
          />
          <TextField
            fullWidth
            label="Apellido Paterno"
          />
          <TextField
            fullWidth
            label="Apellido Materno"
          />

          <TextField
            fullWidth
            label="Correo electronico"
          />
          {/* <FormControl> */}
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
          {/* </FormControl> */}
          {/* Año de nacimiento */}
          {/* Area  */}

          <TextField
            fullWidth
            label="Contraseña"
          />
          <TextField
            fullWidth
            label="confirmar contraseña"
          />
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Signup;
