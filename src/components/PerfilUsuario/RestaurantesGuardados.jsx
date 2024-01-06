import { Box, Typography } from "@mui/material";
import React from "react";
import RestauranteCard from "./RestauranteCard";
import PerfilRestaurante from "../../pages/PerfilRestaurante";

export default function RestaurantesGuardados() {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          margin: "10px",
        }}
      >
        Restaurantes guadados
      </Typography>
      <RestauranteCard />
      <RestauranteCard />
    </Box>
  );
}
