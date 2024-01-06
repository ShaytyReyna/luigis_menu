import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Chip,
} from "@mui/material";

const Menu = ({ restaurante }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={restaurante.nombre}
        height="140"
        image={restaurante.imagenUrl}
      />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
        >
          {restaurante.nombre}
        </Typography>
        <Typography color="text.secondary">
          {restaurante.descripcion}
        </Typography>

        <div style={{ marginTop: "10px" }}>
          <Typography
            variant="subtitle1"
            gutterBottom
          >
            Tipo de Comida
          </Typography>
          <div>
            {restaurante.tipoComida.map((tipo, index) => (
              <Chip
                key={index}
                label={tipo}
                style={{ marginRight: "5px" }}
              />
            ))}
          </div>
        </div>
        <List>
          {restaurante.menu.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.nombre}
                secondary={`Precio: ${item.precio}`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Menu;
