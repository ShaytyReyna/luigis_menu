import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import React from "react";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import ResPerfilTop from "../components/PerfilRes/ResPerfilTop";
import ImageGallery from "../components/PerfilRes/ImageGallery";

const BoxStyle = {
  marginTop: "100px",
  position: "absolute",
  width: "100%",
  height: "100vh",
};
const paperStyle = {
  borderRadius: "10px",
  margin: "10px 25px auto 25px",
  flexGrow: 1,
  padding: "50px auto",
};

const IconStyle = {
  color: "white",
  margin: "auto 0px",
  fontSize: { xs: "1rem", sm: "2rem" },
};

const SideOptionsStyle = {
  padding: "5px",
  margin: "5px 0px",
  width: "100%",
};
export default function PerfilRestaurante(params) {
  return (
    <Box style={BoxStyle}>
      <ResPerfilTop
        style={{
          posittion: "static",
          top: 0,
          right: 0,
          bottom: 0,
          marginBottom: "10px",
        }}
      />
      <Paper
        style={paperStyle}
        elevation={6}
      >
        {" "}
        <Grid
          container
          spacing={2}
          direction={"row"}
          alignItems="flex-start"
          style={{
            backgroundColor: "secondary",
            width: "100%",
            margin: "2px",
            padding: "2px",
          }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm
            style={{
              padding: "0px 2px 0px 2px",
              //   border: "3px solid red",
              marginRight: "5px",
            }}
          >
            <Grid
              item
              xs={12}
              //   sm={12}
              sx={{
                padding: "5px",
                margin: "0px",
              }}
            >
              <ImageGallery />
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                padding: "5px",
                // border: "3px solid green",
                width: "100%",
                height: "50vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FF9B50",
                  padding: "5px 0px 0px 0px",
                  color: "white",
                  borderRadius: "10px 10px 0px 0px  ",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flex: 1,
                  }}
                >
                  Reseñas
                </Typography>
                <IconButton>
                  <ForumRoundedIcon sx={IconStyle} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            xs={12}
            sm={4}
            style={{
              padding: "5px",
              //   border: "3px solid blue",
              marginRight: "5px",
            }}
          >
            <Grid
              item
              xs={12}
              style={SideOptionsStyle}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FF9B50",
                  padding: "5px 0px 0px 0px",
                  color: "white",
                  borderRadius: "10px 10px 0px 0px  ",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flex: 1,
                  }}
                >
                  Direccion
                </Typography>
                <IconButton>
                  <AddLocationRoundedIcon sx={IconStyle} />
                </IconButton>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={SideOptionsStyle}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FF9B50",
                  padding: "5px 0px 0px 0px",
                  color: "white",
                  borderRadius: "10px 10px 0px 0px  ",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flex: 1,
                  }}
                >
                  Menu
                </Typography>
                <IconButton>
                  <RestaurantRoundedIcon sx={IconStyle} />
                </IconButton>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={SideOptionsStyle}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#FF9B50",
                  padding: "5px 0px 0px 0px",
                  color: "white",
                  borderRadius: "10px 10px 0px 0px  ",
                }}
              >
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flex: 1,
                  }}
                >
                  Información
                </Typography>
                <IconButton>
                  <InfoRoundedIcon sx={IconStyle} />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
