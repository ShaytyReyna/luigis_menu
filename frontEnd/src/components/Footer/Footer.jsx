import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import ShopIcon from '@mui/icons-material/Shop';

import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        p: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre Nosotros
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Somos un grupo de desarrolladores amantes de la comida con el sueño de 
              poder compartir nuestro gusto por la comida con otros.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contactanos!
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Si quieres que agreguemos tu restaurante:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mandanos un correo: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Llamanos: 5568903122
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Descarga nuestra app!
            </Typography>
            <Link href="https://play.google.com/store/games?hl=es_MX&gl=US" color="inherit">
            <ShopIcon sx={{fontSize:30}}></ShopIcon>
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Luigi's Menu
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}