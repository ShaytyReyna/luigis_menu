import { styled } from '@mui/system';
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
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import "../App.css";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from "../Schemas/auth";

const MyComponent = styled(Paper)(({ theme }) => ({
  paddingBottom: theme.spacing(8), // Ajusta el espaciado según tus necesidades
  background: '#FFEFBA',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to bottom, #FFFFFF, #F5D5AE)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to bottom, #FFFFFF, #F5D5AE)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: "auto",
  height: "100%",
}));

const gridStyle = {
  position: "absolute",
  // backgroundImage: "url(/public/waves0.png)",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100vh",
};
// const Login = () =>
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => signin(data);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleTextFieldChange = (event) =>{
    const {inputName, inputValue} = event.target.value;
    // register({
    //   ...register,
    // })
    console.log('Valor del textfield:', inputValue)
  };
  return (
    <MyComponent>
      
      <Paper
        elevation={20}
        sx={{
          p: "30px 20px ",
          width: 400,
          height: 480,
          margin: "100px auto ",
          borderRadius: "10px",
        }}
      >
      {loginErrors.map((error, i) => (
        <Message message={error} key={i} />
        ))}
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


        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl 
        sx={{ mt: 2, mb: 2 }}>
          <TextField
            sx={{ margin: "10px 0px 10px 0px" }}
            fullWidth
            label="Correo electronico"
            htmlFor="email"
            type="email"
            name="email"
            onChange={handleTextFieldChange}
            {...register("email", { required: true })}
          />
          <p>{errors.email?.message}</p>

          <FormControl variant="outlined"  
          >
            <InputLabel htmlFor="password">Contraseña</InputLabel>
            <OutlinedInput
              label="Contraseña"
              name="password"
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
              onChange={handleTextFieldChange}
              {...register("password", { required: true, minLength: 6 })}
            />
          </FormControl>
          <p>{errors.password?.message}</p>

          <Button
            sx={{
              margin: "20px 0px 10px 0px",
              color: "white",
              "&:hover": {
                color: "#FFE569", 
              },
            }}
            type="submit"
            variant="contained"
            color="tercero"
            // component="a"
            // href="/"
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
          </Typography>
          {/* 
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
          </Typography> */}
        </FormControl>
        </form>
        {/* 
        {loginErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}
        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Correo electronico:</Label>
          <Input
            label="Escribe tu correo"
            type="email"
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email", { required: true })}
          />
          <p>{errors.email?.message}</p>

          <Label htmlFor="password">Contraseña:</Label>
          <Input
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            {...register("password", { required: true, minLength: 6 })}
          />
          <p>{errors.password?.message}</p>

          <Button>Login</Button>
        </form>

        <p className="flex gap-x-2 justify-between">
          ¿No tienes una cuenta? <Link to="/SignUp" className="text-sky-500">Sign up</Link>
        </p>
        */}
      </Paper>
    </MyComponent>
  );
};


