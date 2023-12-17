import { Box } from "@mui/material";
import React from "react";
import SignUp from "../components/signup";

export default function SignUpU() {
  const estilo = {
    // backgroundImage: "url(/public/waves0.png)",
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // height: "100vh",
    // w: 100,
  };

  return (
    <div style={estilo}>
      <SignUp />
    </div>
  );
}
