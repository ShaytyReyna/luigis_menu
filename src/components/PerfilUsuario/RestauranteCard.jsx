import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";

// import PerfilRes from "../components/PerfilRes/Menu";
import PerfilRes from "../../pages/PerfilRestaurante";
import { Link } from "react-router-dom";
// import imagen from "../../../public/ResXYZ";

const fullstarStyle = {
  color: "#FFCD4B",
  fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

const RestauranteCard = (/*{ restaurante }*/) => {
  const [isSave, setIsSave] = React.useState(true);
  const [isHidden, setIsHidden] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleIconClick = () => {
    setIsDialogOpen(true);
  };
  const handleSaveConfirmation = (confirm) => {
    setIsDialogOpen(false);
    if (confirm) {
      setIsHidden(true);
    }
  };

  const restaurante = {
    nombre: "Restaurante XYZ",
    tipoComida: ["italiana", "Japonesa", "Taqueria", "Variado"],
    calificacionPromedio: 7,
    direccion:
      "Av. Té 950, Granjas México, Iztacalco, 08400 Ciudad de México, CDMX",
    numReseñas: 2,
    imagenUrl:
      "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=600",
    descripcion: "Un lugar encantador para disfrutar de deliciosos platillos.",
    paginaPrincipalLink: <PerfilRes />,
    menu: [
      {
        nombre: "Platillo 1",
        precio: "$10.99",
      },
      {
        nombre: "Platillo 2",
        precio: "$12.99",
      },
      {
        nombre: "Platillo 3",
        precio: "$8.99",
      },
      // ... más elementos del menú
    ],
  };

  return (
    <>
      {!isHidden && (
        <Card
          elevation={5}
          sx={{ margin: "15px auto" }}
        >
          <Link to="/">
            <CardMedia
              component="img"
              image={restaurante.imagenUrl}
              alt={restaurante.nombre}
              height="140"
            />
          </Link>

          <CardContent sx={{ width: "100%", padding: "0px", margin: "0px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              direction="column"
              justifyContent="center"
              alignItems="center"
              style={{
                width: "100%",
                // border: "solid 5px blue",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Grid
                item
                xs={10}
                container
                columns={12}
                justifyContent="center"
                alignItems="center"
                style={{
                  width: "100%",
                  // border: "solid 5px purple",
                  padding: "0px",
                  margin: "0px",
                }}
              >
                <Link to="/">
                  <Grid
                    item
                    xs
                    // sx={{ backgroundColor: "Red" }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ color: "black" }}
                    >
                      {restaurante.nombre}
                    </Typography>
                  </Grid>
                </Link>

                <Grid
                  item
                  xs={3}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    width: "100%",
                    // border: "solid 5px green"
                  }}
                >
                  <StarRoundedIcon sx={fullstarStyle} />
                  <Typography
                    variant="h6"
                    gutterBottom
                  >
                    {restaurante.calificacionPromedio / 2}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                >
                  <IconButton
                    onClick={handleIconClick}
                    color="primary"
                  >
                    {isSave ? (
                      <BookmarkRoundedIcon
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                      />
                    ) : (
                      <BookmarkBorderRoundedIcon
                        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
                      />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid
                item
                xs={10}
                container
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: "100%",
                  // border: "solid 5px lightblue"
                }}
              >
                <Typography
                  variant="body1"
                  gutterBottom
                >
                  Número de Reseñas: {restaurante.numReseñas}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
      <Dialog
        open={isDialogOpen}
        onClose={() => handleSaveConfirmation(false)}
      >
        <DialogTitle>Confirmar acción</DialogTitle>
        <DialogContent>
          <Typography>
            ¿Seguro que deseas eliminar este restaurante de tu lista de
            guardados?
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
    </>
  );
};
export default RestauranteCard;
