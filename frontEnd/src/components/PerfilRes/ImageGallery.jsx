import { Box, ListSubheader, Typography } from "@mui/material";
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export default function ImageGallery(params) {
  return (
    <ImageList
      sx={{ width: "100%", height: "45vh", margin: "0px 0px 5px 0px" }}
      cols={3}
      // rowHeight={200}
      gap={5}
    >
      <ImageListItem
        key="Subheader"
        cols={3}
        sx={{
          backgroundColor: "#FF9B50",
          padding: "5px 0px 0px 0px",
          color: "white",
          borderRadius: "10px 10px 0px 0px  ",
        }}
      >
        {/* <ListSubheader component="div">Fotos</ListSubheader> */}
        <Typography variant="h4">Galeria de fotos</Typography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={item.img}
            src={item.img}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

//luego cambiar por imagenes de la bd, aun no se como...
const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
