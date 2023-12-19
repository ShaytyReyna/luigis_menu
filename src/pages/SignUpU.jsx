import { Box } from "@mui/material";
import React from "react";
import SignUp from "../components/signup";

export default function SignUpU() {
  const estilo = {
    // backgroundImage: "url(/public/waves0.png)",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    //height: "100vh",
    width: "100%",
  };

  return (
    <div
      style={estilo}
      position="static"
      maxWidth="x1"
    >
      <SignUp />
    </div>
  );
}
