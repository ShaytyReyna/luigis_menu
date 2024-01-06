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
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from "@mui/material";
export default function CardCash() {
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

  return (
    <>
      <div>
        <Card sx={{ maxWidth: 345, marginRight: 3 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="../public/Prueba0.jpg"
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
            <MonetizationOnRoundedIcon />
            <MonetizationOnRoundedIcon />
            <MonetizationOnRoundedIcon />
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
