import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Home from "../pages/Home";
import { Drawer } from "@mui/material";

import RestaurantesGuardados from "./RestaurantesGuardados";
import Privacidad from "./Privacidad";
import EditarDatos from "./EditarDatos";
import Preferencias from "./Preferencias";

const divStyle = {
  // position: "static",
  width: "100%",
  backgorundcolor: "blue",
};

export default function NestedList({ onComponentChange }) {
  // export default function NestedList({ handleOptionClick }) {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    // Cambia el componente principal según la selección
    switch (index) {
      case 0:
        onComponentChange(<RestaurantesGuardados />);
        break;
      case 1:
        onComponentChange(<Privacidad />);
        break;

      case 2:
        onComponentChange(<EditarDatos />);
        break;

      case 3:
        onComponentChange(<Preferencias />);
        break;

      // Agregar los otros
      default:
        onComponentChange(null); //si no hay coincidencias
    }
  };

  // const handleItemClick = (option) => {
  //   setOpen(false);
  //   handleOptionClick(option);
  // };

  return (
    <div style={divStyle}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          ></ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Opciones" />
          <ListItemIcon>
            <AlignHorizontalRightIcon />
          </ListItemIcon>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
        >
          <List
            component="div"
            disablePadding
          >
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 0}
              onClick={(event) => handleListItemClick(event, 0)}
              // href="/RestaurantesGuardados"
            >
              {" "}
              <ListItemText primary="Restaurantes guardados" />
              {}
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 1}
              onClick={(event) => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Privacidad y seguridad" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Editar datos" />
            </ListItemButton>
            <ListItemButton
              sx={{ pl: 4 }}
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Preferencias" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}
