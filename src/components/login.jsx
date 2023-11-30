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
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";

const Login = () => {
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
          {/* revisar el align del avatar por que no jala?? */}
          <Avatar sx={{ bgcolor: "#FF9B50", margin: "0% 0% 0% 45%" }}></Avatar>
          <h2 sx={{ margin: 0 }}>Log In</h2>
          <Typography variant="caption">
            {" "}
            Ingresa los datos para poder iniciar sesion
          </Typography>
        </Grid>

        <FormControl sx={{ mt: 5 }}>
          <TextField
            fullWidth
            label="Nombre"
            placeholder="Ingrese su(s) nombre(s)"
          />
          <TextField
            sx={{ margin: "10px 0px 10px 0px" }}
            fullWidth
            label="Correo electronico"
          />
          {/* <FormControl> */}
          {/* </FormControl> */}
          {/* Año de nacimiento */}
          {/* Area  */}

          <TextField
            sx={{ margin: "10px 0px 10px 0px" }}
            fullWidth
            label="Contraseña"
          />

          <Button
            sx={{ margin: "10px 0px 10px 0px" }}
            type="submit"
            variant="contained"
            color="tercero"
          >
            Log in
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Login;
