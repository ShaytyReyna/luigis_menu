import {
  Grid,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import React, { useState } from "react";

const avatarStyle = {
  margin: "auto",
  width: "20vw",
  height: "20vw",

  maxWidth: "190px",
  maxHeight: "190px",

  minWidth: "60px",
  minHeight: "60px",
};

const fullstarStyle = {
  color: "#FFCD4B",
  fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

const voidstarStyle = {
  color: "gray",
  fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

// Creamos una funcion para ver cuantos iconos vamos a mostrar o cambiar
//toma un numero (calif) y devuelve un arreglo de las estrellas que mostraremos
const getRatingIcons = (calif) => {
  //arreglo para el numero de iconos
  const icons = [];
  //maximo de estrellas que vamos a mostrar
  const totalStars = 5;
  //numero de estrellas completas quevamos a msotrar redondeando hacia abajo
  //como es un numero base 10 de calificaicones entonces dividimos entre 2 para saber cuantas estrellas completas vamos a usar
  const numFullStars = Math.ceil(calif / 2);
  // si tenemos residuo al dividir entre dos entonce spondremos las estrellas que estan a la mitad, por eso tenemos esta constante para saber si ocuparemos ese icono d eestrella a la mitad o no
  const hasHalfStar = calif % 2 !== 0;

  //icons.push pone elementos al final de un arreglo (icons), y agrega lo que este dentro del parentesis
  //uso key para poner un id a cada estrella que se agregara
  //estrellas completas que se mostraran
  for (let i = 0; i < numFullStars; i++) {
    icons.push(
      <StarRoundedIcon
        key={i}
        sx={fullstarStyle}
      />
    );
  }

  //estrellas a la mitad que se mostraran
  if (hasHalfStar) {
    icons.push(
      <StarHalfRoundedIcon
        key={numFullStars}
        sx={fullstarStyle}
      />
    );
  }

  //el resto de estrellas que no estaran completas
  const remainingStars = totalStars - icons.length;
  for (let i = 0; i < remainingStars; i++) {
    icons.push(
      <StarBorderRoundedIcon
        key={numFullStars + i}
        sx={voidstarStyle}
      />
    );
  }

  return icons;
};

// funcion para el rango de precios
//preguntar  rango de precios en la bd

export default function ResPerfilTop() {
  const theme = useTheme();

  const [isSave, setIsSave] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // Agregado
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const handleIconClick = () => {
    if (isSave) {
      // Si ya está guardado, abrir el diálogo de confirmación
      setIsDialogOpen(true);
    } else {
      // Si no está guardado, marcar como guardado y mostrar el Snackbar
      setIsSave(true);
      setShowSnackbar(true);
    }
  };
  const handleSaveConfirmation = (confirm) => {
    setIsDialogOpen(false);

    if (confirm) {
      // Si se confirma en el diálogo, cambiar el estado a no guardado
      setIsSave(false);
      setShowSnackbar(true);
    }
  };

  //resplazar despues con lo que viene de BD
  const calif = 7;

  return (
    <>
      <Paper
        elevation={6}
        style={{
          borderRadius: "10px",
          margin: "auto 25px ",
          flexGrow: 1,
          padding: "50px auto",
          w: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          style={{
            backgroundColor: "secondary",
            width: "100%",
            margin: "5px",
            padding: "5px",
          }}
        >
          <Grid
            item
            xs={12}
            sm={3}
            style={{ padding: "5px" }}
          >
            <Avatar
              src="/public/Prueba0.jpg"
              style={avatarStyle}
            ></Avatar>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            container
            direction="column"
            spacing={2}
            style={{ padding: "5px" }}
            alignItems="center"
          >
            <Grid
              item
              xs
              style={{
                padding: "10px",
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                component="div"
                sx={{
                  margin: "20px 10px 0px 0px",
                  fontSize: { xs: "1.5rem", sm: "2rem" },
                }}
              >
                Nombre del restaurante
              </Typography>

              <Grid
                item
                xs
                container
                spacing={2}
                direction="column"
                style={{ marginTop: "0.5rem" }}
              >
                <Grid
                  item
                  xs
                  style={{ padding: "16px" }}
                >
                  <Typography
                    variant="body2"
                    gutterBottom
                    sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                  >
                    Calificacion:
                  </Typography>
                  {getRatingIcons(calif)}
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                  >
                    Rango de precios:
                  </Typography>
                  <MonetizationOnRoundedIcon />
                  <MonetizationOnRoundedIcon />
                  <MonetizationOnRoundedIcon />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={1}
            style={{ margin: "auto", padding: "5px" }}
          >
            <IconButton
              onClick={handleIconClick}
              color="primary"
            >
              {isSave ? (
                <BookmarkRoundedIcon
                  sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
                />
              ) : (
                <BookmarkBorderRoundedIcon
                  sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
                />
              )}
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Dialog
        open={isDialogOpen}
        onClose={() => handleSaveConfirmation(false)}
      >
        <DialogTitle>Confirmar acción</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Seguro que deseas {isSave ? "eliminar" : "guardar"} este
            restaurante {isSave ? "de" : "en"} tu lista de{" "}
            {isSave ? "guardados" : "favoritos"}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleSaveConfirmation(false)}
            color="primary"
          >
            Cancelar
          </Button>
          <Button
            onClick={() => handleSaveConfirmation(true)}
            color="primary"
          >
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        message={`Restaurante ${
          isSave ? "guardado" : "eliminado"
        } de tu lista de ${isSave ? "favoritos" : "guardados"}`}
      />
    </>
  );
}
