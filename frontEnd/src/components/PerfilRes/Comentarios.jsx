import * as React from 'react';
import { useReseñas } from "../../context/reseñasContext";
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
import { orange } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function Comentarios() {

    return (
        <div>
            <Card sx={{ width: 700 }}>
                <CardHeader
                sx={{ textAlign: "left" }}
                    avatar={
                        <IconButton sx={{backgroundColor:'white' }}
                        component="a"
                        href="/UsuarioAjeno"
                        >
                            <AccountCircleIcon  sx={{color:orange[600],fontSize:40 }}></AccountCircleIcon>
                        </IconButton>
                    }
                    title="Juanito Alcachofa"
                    subheader="September 14, 2016"

                />
                <CardContent sx={{ textAlign: "left" }}>
                    <Typography variant="body2" color="text.secondary">
                        Que increible restaurante! tiene grandes platillos, el servicio es muy atento
                        y quisiera volver de nuevo. Todos los platillos estan recomendados, pero el que
                        mas destaca es su pasta con camarones.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>

            </Card>
        </div>
    );
}