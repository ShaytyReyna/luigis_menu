import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import {IconButton} from "@mui/material";
export default function CardRes() {
    const [isSave, setIsSave] = React.useState(true);

    const handleIconClick = () => {
        setIsSave((prev) => !prev);
    };
    return (
        <div>
            <Card sx={{ maxWidth: 345, marginRight:3 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="../public/Prueba0.jpg"
                    title="Restaurante"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre Restaurante
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Un lugar encantador para disfrutar de deliciosos platillos.
                    </Typography>
                    <br />
                    <Stack direction="row" spacing={1}>
                        <Chip label="italiana" size="small" />
                        <Chip label="Japonesa" size="small" />
                        <Chip label="Taqueria" size="small" />
                        <Chip label="Variado" size="small" />
                    </Stack>
                </CardContent>
                <CardActions>
                    <Button size="small"
                        component="a"
                        href="/PerfilRestaurante"
                        sx={{ padding: 2 }}
                    >Visitar</Button>
                    <IconButton
                        onClick={handleIconClick}
                        color="primary"
                    >
                        {isSave ? (
                            <BookmarkRoundedIcon
                                sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
                            />
                        ) : (
                            <BookmarkBorderRoundedIcon
                                sx={{ fontSize: { xs: "1rem", sm: "2rem" } }}
                            />
                        )}
                    </IconButton>
                </CardActions>
            </Card>
        </div >
    );
}