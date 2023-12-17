import {
  Grid,
  Stack,
  ButtonBase,
  Typography,
  Paper,
  Avatar,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import { blue } from "@mui/material/colors";

export default function UsuPerfilTop() {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "secondary",
        p: 16,
        w: "100%",
      }}
    >
      {/* <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        // display="flex"
        sx={{ backgroundColor: "secondary", width: "100%" }}
      >
        <Grid item>
          <Avatar
            src="/public/Prueba0.jpg"
            sx={{ w: 300, height: "auto" }}
          ></Avatar>
          {/* <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img
              alt="complex"
              src="/public/Prueba0.jpg"
            />
          </ButtonBase> */}
      {/* </Grid>

        <Grid
          item
          xs={12}
          sm
          container
          direction="column"
          spacing={2}
        >
          <Grid
            item
            xs
            container
            direction="column"
            spacing={2}
          >
            <Grid
              item
              xs
            >
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                Nombre de usuario
              </Typography>
              <Grid
                item
                xs
                container
                spacing={2}
              >
                <Grid
                  item
                  xs
                >
                  <Typography
                    variant="body2"
                    gutterBottom
                  >
                    Seguidores
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    # de seguidores
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs
                >
                  <Typography
                    variant="body2"
                    gutterBottom
                  >
                    Seguidos
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    # de seguidos
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid Item>
          <FavoriteBorderIcon />
        </Grid> */}
      {/* </Grid> */}

      <Table>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={3}>
              <Avatar
                src="/Prueba0.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </TableCell>

            <TableCell colSpan={2}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="div"
              >
                Nombre de usuario
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell colSpan={2}>
              <Typography
                variant="body2"
                gutterBottom
              >
                Seguidores
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                # de seguidores
              </Typography>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <Typography
                variant="body2"
                gutterBottom
              >
                Seguidos
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                # de seguidos
              </Typography>
            </TableCell>

            <TableCell>
              <FavoriteBorderIcon />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}
