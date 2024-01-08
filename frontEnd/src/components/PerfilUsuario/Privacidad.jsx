import { Box, Typography } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

export default function Privacidad() {
  return (
    <Box
      sx={{
        width: "65vw",
        margin: "30px",
        padding: "5px",
        borderRadius: "10px",
        flexGrow: 1,
        textAlign: "justify",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{ textAlign: "center" }}
      >
        Contrato de Privacidad y Seguridad para Luigi's Menu
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
      >
        Este Contrato de Privacidad y Seguridad se celebra entre Luigi's Menu,
        en adelante "La Empresa", y el usuario de la plataforma, en adelante
        "Usuario". Este Contrato establece los términos y condiciones bajo los
        cuales La Empresa recopilará, procesará, almacenará y utilizará la
        información proporcionada por el Usuario en relación con el uso del
        sitio web de reseñas de restaurantes.{" "}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        1. Información Recopilada:
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        La Empresa recopilará la información proporcionada por el Usuario al
        registrarse en la plataforma, que puede incluir, entre otros, nombre,
        dirección de correo electrónico, y reseñas y calificaciones de
        restaurantes.{" "}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        2. Uso de la Información:
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        La Empresa utilizará la información recopilada con el propósito de
        mejorar la experiencia del Usuario en la plataforma, permitiendo la
        visualización y búsqueda de reseñas y calificaciones de restaurantes por
        parte de otros usuarios. La información recopilada no será vendida ni
        compartida con terceros sin el consentimiento expreso del Usuario.{" "}
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        3. Publicación de Reseñas y Calificaciones:
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        El Usuario acepta que las reseñas y calificaciones proporcionadas podrán
        ser públicas y estarán disponibles para otros usuarios de la plataforma.
        La Empresa se reserva el derecho de moderar y eliminar contenido que
        viole los términos de servicio.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        4. Seguridad:{" "}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        {" "}
        La Empresa implementará medidas de seguridad razonables para proteger la
        información del Usuario. Sin embargo, no se puede garantizar la
        seguridad completa, y el Usuario reconoce y acepta los riesgos asociados
        con la transmisión de datos a través de internet.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        5. Consentimiento del Usuario:{" "}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        {" "}
        Al utilizar la plataforma, el Usuario otorga su consentimiento para la
        recopilación, procesamiento y uso de su información de acuerdo con los
        términos de este Contrato.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        6. Cambios en la Política de Privacidad:{" "}
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        {" "}
        La Empresa se reserva el derecho de modificar esta Política de
        Privacidad en cualquier momento. Los cambios serán notificados a los
        Usuarios a través de la plataforma.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        7. Ley Aplicable:
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
      >
        {" "}
        Este Contrato se regirá e interpretará de acuerdo con las leyes de los
        Estados Unidos Mexicanos.Al aceptar este Contrato, el Usuario reconoce
        haber leído, entendido y aceptado los términos y condiciones
        establecidos.
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          required
          disabled
          label="Acepto todo lo establecido anteriormente en el contrato de Privacidad y seguridad"
        />
      </FormGroup>
    </Box>
  );
}
