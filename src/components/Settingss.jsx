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

const divStyle = {
  position: "absolute",
  width: "100%",
  backgorundcolor: "blue",
};

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
              //   onClick={() => setOpenHome(true)}
            >
              {" "}
              <ListItemText primary="Restaurantes guardados" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Privacidad y seguridad" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Ayuda" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Editar datos" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Preferencias" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Drawer
        // open={openHome} ///*el open toma true o false*/}
        anchor="bottom"
        // onClose={() => setOpenHome(false)}
      >
        <Home />
      </Drawer>
    </div>
  );
}
