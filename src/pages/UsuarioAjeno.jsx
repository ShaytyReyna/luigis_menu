import { Box, Grid, Paper, Typography, IconButton } from "@mui/material";
import React from "react";
import UsuPerfilTop from "../components/PerfilUsuario/UsuPerfilTop";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import Comentarios_U from "../components/Comentarios_U";

const BoxStyle = {
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
  


export default function UsuarioAjeno(){
    return(
        <Box style={BoxStyle}>
        <UsuPerfilTop
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
          <Grid
            container
            spacing={2}
            direction={"row"}
            alignItems="center"
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
              sm
              style={{
                padding: "5px",
                // border: "3px solid red",
                marginRight: "5px",
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
                <br />
              </div>    
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignItems="center"
            >
             <Comentarios_U></Comentarios_U>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    );
}