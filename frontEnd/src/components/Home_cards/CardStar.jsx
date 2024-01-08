import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import { IconButton } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";

const fullstarStyle = {
  color: "#FFCD4B",
  fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

const voidstarStyle = {
  color: "gray",
  fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

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

export default function CardStar() {
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

  const calif = 8;

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345, marginRight: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="Restaurante"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Nombre Restaurante
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Un lugar encantador para disfrutar de deliciosos platillos.
            </Typography>
            <br />
            {getRatingIcons(calif)}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              component="a"
              href="/PerfilRestaurante"
              sx={{ padding: 2 }}
            >
              Visitar
            </Button>
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
          </CardActions>
        </Card>
      </div>
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
