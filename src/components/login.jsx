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
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const gridStyle = {
  position: "absolute",
  // top: 0,
  // right: 0,
  // bottom: 0,
  // left: 0,
  backgroundImage: "url(/public/waves0.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
  // xIndex: -1,
};

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Grid style={gridStyle}>
      <Paper
        elevation={20}
        sx={{
          p: "30px 20px ",
          width: 400,
          height: 560,
          margin: "100px auto ",
          borderRadius: "10px",
        }}
      >
        <Grid sx={{ align: "center" }}>
          <Avatar
            sx={{
              bgcolor: "#FF9B50",
              margin: "0% auto",
              width: "65px",
              height: "65px",
            }}
          ></Avatar>
          <h2 sx={{ margin: 0 }}>Log In</h2>
          <Typography variant="body1">
            {" "}
            Ingresa los datos para poder iniciar sesion
          </Typography>
        </Grid>

        <FormControl sx={{ mt: 2, mb: 2 }}>
          <TextField
            sx={{ margin: "10px 0px 10px 0px" }}
            fullWidth
            label="Correo electronico"
          />

          <FormControl variant="outlined">
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

          <Button
            sx={{
              margin: "20px 0px 10px 0px",
              color: "white",
              "&:hover": {
                color: "#FFE569", // Cambia al color deseado al pasar el mouse
              },
            }}
            type="submit"
            variant="contained"
            color="tercero"
            component="a"
            href="/"
            endIcon={<LoginIcon />}
          >
            Log in
          </Button>
          <Typography
            variant="body1"
            sx={{ mt: 1, mb: 1 }}
          >
            ¿No tienes una cuenta?{" "}
            <Link
              to="/SignUp"
              underline="hover"
              style={{ color: "#FD8D14" }}
            >
              Regístrate aquí como usuario{" "}
            </Link>
            .
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, mb: 1 }}
          >
            ¿Eres un restaurante?{" "}
            <Link
              to="/SignUpRes"
              underline="hover"
              color="primary"
              style={{ color: "#FD8D14" }}
            >
              Regístrate aquí como restaurante
            </Link>
            .
          </Typography>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default Login;
