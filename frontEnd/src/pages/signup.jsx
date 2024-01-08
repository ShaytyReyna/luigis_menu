import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { registerSchema } from "../Schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

import { styled } from '@mui/system';
import React, { useState } from "react";
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



const MyComponent = styled(Paper)(({ theme }) => ({
  //padding: theme.spacing(19.5), // Ajusta el espaciado según tus necesidades
  paddingBottom: theme.spacing(2),
  background: '#FFEFBA',  /* fallback for old browsers */
  background: '-webkit-linear-gradient(to bottom, #FFFFFF, #F5D5AE)',  /* Chrome 10-25, Safari 5.1-6 */
  background: 'linear-gradient(to bottom, #FFFFFF, #F5D5AE)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}));

const paperStyle = {
  width: 480,
  margin: "100px auto",
  borderRadius: "10px",
  padding: "50px auto",
};
const avatarStyle = {
  backgroundColor: "#FF9B50",
  margin: "10px auto 0px auto",
  width: "60px",
  height: "60px",
};
export default function Signup() {
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    await signup(value);
  };



  useEffect(() => {
    if (isAuthenticated) navigate("/Login");
  }, [isAuthenticated]);
  
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  
  return (
    <MyComponent>
    <Paper
      elevation={20}
      style={paperStyle}
    >
      {registerErrors.map((error, i) => (
          <Message message={error} key={i} />
        ))}


      <Grid sx={{ align: "center", pt: "5px" }}>
        <Avatar style={avatarStyle}>
          <AddCircleIcon style={{ fontSize: "50px" }} />
        </Avatar>
        <h2 sx={{ margin: 0 }}>Sign Up</h2>
        <Typography variant="body1" sx={{ margin:5 }} >
          {" "}
          Por favor llena este formulario para poder crear una cuenta
        </Typography>
      </Grid>

      <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl sx={{ mt: 1 }}>
        <TextField
          fullWidth
          label="Nombre" 
          htmlFor="username"
          placeholder="Ingrese su(s) nombre(s)"
          {...register("username")}
          sx={{ mt: "10px" }}
        />
         {errors.username?.message && (
          <p className="text-red-500">{errors.username?.message}</p>
          )}

        <TextField
          fullWidth
          label="Apellido Paterno"
          htmlFor="apellido_p"
          placeholder="Ingrese su apellido paterno"
          {...register("apellido_p")}
          sx={{ mt: "10px" }}
        />
        {errors.apellido_p?.message && (
        <p className="text-red-500">{errors.apellido_p?.message}</p>
         )}

        <TextField
          fullWidth
          label="Apellido Materno"
          htmlFor = "apellido_m"
          placeholder="Ingrese su apellido materno"
          {...register("apellido_m")}
          sx={{ mt: "10px" }}
        />
        {errors.apellido_m?.message && (
        <p className="text-red-500">{errors.apellido_m?.message}</p>
         )}
         
        <TextField
          fullWidth
          label="Correo electronico"
          placeholder="Ingrese su correo electronico"
          sx={{ mt: "10px" }}
          {...register("email")}
        />
        {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}

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
          htmlFor = "genero"
          sx={{ margin: "0px auto" }}
          {...register("genero")}
          onChange={(e) => {
            register("genero").onChange(e);
          }}
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
        {/* <FormControl>
          <InputLabel id="select-genero-label"> Genero</InputLabel>
          <Select
            labelId="select-genero-label"
            id="genero-select"
            label="Genero habitual"
            defaultValue=""
            htmlFor = "zona"
            {...register("zona")}
            onChange={(e) =>{
              register("zona").onChange(e);
            }}
          >
            <MenuItem
              value={"Femenino"}
              key={1}
            >
              Femenino
            </MenuItem>
            <MenuItem
              value={"Masculino"}
              key={2}
            >
              Masculino
            </MenuItem>
            <MenuItem
              value={"Otro"}
              key={3}
            >
              Otro
            </MenuItem>
          </Select>
        </FormControl> */}
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
            htmlFor = "zona"
            {...register("zona")}
            onChange={(e) =>{
              register("zona").onChange(e);
            }}
          >
            <MenuItem
              value={"Area limitrofe"}
              key={1}
            >
              Area limitrofe{" "}
            </MenuItem>
            <MenuItem
              value={"Centro"}
              key={2}
            >
              Centro
            </MenuItem>
            <MenuItem
              value={"Nor-Oriente"}
              key={3}
            >
              Nor-Oriente
            </MenuItem>
            <MenuItem
              value={"Norte"}
              key={4}
            >
              Norte
            </MenuItem>
            <MenuItem
              value={"Oriente"}
              key={5}
            >
              Oriente
            </MenuItem>
            <MenuItem
              value={"Poniente"}
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
            placeholder="********"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password?.message}</p>
          )}
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
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          )}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          sx={{
            margin: "20px 0px",
            color: "white",
            "&:hover": {
              color: "#FFE569", 
            },
          }}
          color="tercero"
          // component="a"
          // href="/"
        >
          Sign up
        </Button>
      </FormControl>
      </form>
    </Paper>
    </MyComponent>
  );
};

