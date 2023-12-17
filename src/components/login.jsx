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
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
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
          width: 350,
          height: 500,
          margin: "20px 20px",
          borderRadius: "10px",
        }}
      >
        <Grid sx={{ align: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#FF9B50",
              margin: "0% 0% 0% 38%",
              width: "65px",
              height: "65px",
            }}
          ></Avatar>
          <h2 sx={{ margin: 0 }}>Log In</h2>
          <Typography variant="caption">
            {" "}
            Ingresa los datos para poder iniciar sesion
          </Typography>
        </Grid>

        <FormControl sx={{ mt: 5, mb: 2 }}>
          <TextField
            sx={{ margin: "10px 0px 10px 0px" }}
            fullWidth
            label="Correo electronico"
          />

          <FormControl variant="outlined">
            <InputLabel>Contraseña</InputLabel>
            <OutlinedInput
              id="contrasena"
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
            sx={{ margin: "20px 0px 10px 0px" }}
            type="submit"
            variant="contained"
            color="tercero"
            component="a"
            href="/home"
          >
            Log in
          </Button>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Login;
