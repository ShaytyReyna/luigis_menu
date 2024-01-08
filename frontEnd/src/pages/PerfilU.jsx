import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import UsuPerfilTop from "../components/PerfilUsuario/UsuPerfilTop";
import Settings0 from "../components/PerfilUsuario/Settingss";
import { useState } from "react";
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

export default function PerfilU() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

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
      <Paper
        style={paperStyle}
        elevation={6}
      >
        <Grid
          container
          spacing={2}
          direction={"row"}
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
            sm
            style={{
              padding: "5px",
              // border: "3px solid red",
              marginRight: "5px",
            }}
          >
            <Settings0
              style={{
                margin: 2,
                mt: "10px",
                position: "static",
              }}
              onComponentChange={handleComponentChange}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={9}
            style={{
              padding: "5px",
              // border: "3px solid blue",
              marginRight: "5px",
            }}
          >
            {selectedComponent && selectedComponent}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
