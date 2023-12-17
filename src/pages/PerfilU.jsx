import { Box, TableRow, TableCell, Table, TableBody } from "@mui/material";
import React from "react";
import UsuPerfilTop from "../components/UsuPerfilTop";
import Settings0 from "../components/Settingss";

export default function UsuAjeno() {
  return (
    <Box sx={{ backgroundcolor: "inherit", mt: 0 }}>
      <UsuPerfilTop
        sx={{
          // posittion: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <Settings0 />
    </Box>
  );
}
