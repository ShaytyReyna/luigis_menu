import {
  Grid,
  Typography,
  Paper,
  Avatar,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import React from "react";

const avatarStyle = {
  margin: "auto",
  width: "20vw",
  height: "20vw",

  maxWidth: "190px",
  maxHeight: "190px",

  minWidth: "60px",
  minHeight: "60px",
};

export default function UsuPerfilTop() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleIconClick = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <Paper
      elevation={6}
      style={{
        borderRadius: "10px",
        margin: "100px 25px auto 25px",
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
        >
          <Grid
            item
            xs
            style={{
              margin: "auto 0px",
              padding: "10px",
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle1"
              component="div"
              // style={{
              //   // ...responsiveFontSize(20),
              // }}
              sx={{
                margin: "20px 10px 0px 0px",
                fontSize: { xs: "1.5rem", sm: "2rem" },
              }}
            >
              Nombre de usuario
            </Typography>
            <Grid
              item
              xs
              container
              spacing={2}
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
                  // style={responsiveFontSize(14)}
                  sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                >
                  Seguidores
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  // style={
                  //   {
                  //     // ...responsiveFontSize(12),
                  //     // fontSize: "1vw" /* 4% del ancho de la pantalla */,
                  //   }
                  // }
                  sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                >
                  # de seguidores
                </Typography>
              </Grid>

              <Grid
                item
                xs
                style={{ padding: "16px" }}
              >
                <Typography
                  variant="body2"
                  gutterBottom
                  // style={responsiveFontSize(14)}
                  sx={{ fontSize: { xs: "14px", sm: "16px" } }}
                >
                  Seguidos
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  // style={responsiveFontSize(12)}
                  sx={{ fontSize: { xs: "12px", sm: "14px" } }}
                >
                  # de seguidos
                </Typography>
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
            // sx={{ fontSize: { xs: "8rem", sm: "12rem" } }}
          >
            {isFavorite ? (
              <FavoriteRoundedIcon
                sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
              />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
