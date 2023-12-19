import {
  Box,
  TableRow,
  TableCell,
  Table,
  TableBody,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import UsuPerfilTop from "../components/UsuPerfilTop";
import Settings0 from "../components/Settingss";

const BoxStyle = {
  position: "absolute",
  width: "100%",
  height: "100vh",
};
export default function PerfilU() {
  return (
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={2}
        style={{
          bordercolor: "black",
          borderWidth: "thick",
          borderStyle: "solid",
          margin: 5,
        }}
      >
        <Grid
          item
          xs
          // md={4}
          style={{ border: "3px solid red", margin: 5 }}
        >
          <Settings0
            style={{
              margin: 2,
              mt: "10px",
              posittion: "static",
            }}
          />
        </Grid>
        <Grid
          item
          xs={7}
          // md={8}
          style={{ border: "3px solid blue", margin: 2 }}
        ></Grid>
      </Grid>
    </Box>
  );
}
