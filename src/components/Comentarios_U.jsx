import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { orange } from '@mui/material/colors';
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import { Grid } from '@mui/material';

const fullstarStyle = {
    color: "#FFCD4B",
    fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

const voidstarStyle = {
    color: "gray",
    fontSize: { xs: "1.5rem", sm: "2.5rem" },
};

const getRatingIcons = (calif) => {
    //arreglo para el numero de iconos
    const icons = [];
    //maximo de estrellas que vamos a mostrar
    const totalStars = 5;
    //numero de estrellas completas quevamos a msotrar redondeando hacia abajo
    //como es un numero base 10 de calificaicones entonces dividimos entre 2 para saber cuantas estrellas completas vamos a usar
    const numFullStars = Math.ceil(calif / 2);
    // si tenemos residuo al dividir entre dos entonce spondremos las estrellas que estan a la mitad, por eso tenemos esta constante para saber si ocuparemos ese icono d eestrella a la mitad o no
    const hasHalfStar = calif % 2 !== 0;

    //icons.push pone elementos al final de un arreglo (icons), y agrega lo que este dentro del parentesis
    //uso key para poner un id a cada estrella que se agregara
    //estrellas completas que se mostraran
    for (let i = 0; i < numFullStars; i++) {
        icons.push(
            <StarRoundedIcon
                key={i}
                sx={fullstarStyle}
            />
        );
    }

    //estrellas a la mitad que se mostraran
    if (hasHalfStar) {
        icons.push(
            <StarHalfRoundedIcon
                key={numFullStars}
                sx={fullstarStyle}
            />
        );
    }

    //el resto de estrellas que no estaran completas
    const remainingStars = totalStars - icons.length;
    for (let i = 0; i < remainingStars; i++) {
        icons.push(
            <StarBorderRoundedIcon
                key={numFullStars + i}
                sx={voidstarStyle}
            />
        );
    }

    return icons;
};

export default function Comentarios_U() {
    const [isSave, setIsSave] = React.useState(false);

    const handleIconClick = () => {
        setIsSave((prev) => !prev);
    };

    //resplazar despues con lo que viene de BD
    const calif = 7;

    return (
        <div>
            <Card sx={{ width: 700 }}>
                <CardHeader
                    sx={{ textAlign: "left" }}
                    avatar={
                        <IconButton sx={{ backgroundColor: 'white' }}
                            component="a"
                            href="#"
                        >
                            <AccountCircleIcon sx={{ color: orange[600], fontSize: 40 }}></AccountCircleIcon>
                        </IconButton>
                    }
                    action={
                        <Grid>
                            {getRatingIcons(calif)}
                        </Grid>
                    }
                    title="Roberto Lechuga"
                    subheader="Octubre 20,2023"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image='../public/Prueba0.jpg'
                    alt="Restaurante"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>

            </Card>
        </div>
    );
}