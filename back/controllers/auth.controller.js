import { Await } from 'react-router'
import Restaurante from '../models/restaurante.model.js'
import Usuario from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { BalconyRounded } from '@mui/icons-material'
//import jwt from 'jsonwebtoken'

export const register_r = async (req, res) => {
    const {nombre_restaurante, email_r, contraseña, descripcion, direccion, comida} = req.body
    try {
        const contraseñahash = await bcrypt.hash(contraseña, 10)
        const newRestaurante = new Restaurante ({
            nombre_restaurante,
            email_r,
            contraseña: contraseñahash,
            descripcion,
            direccion,
            comida
        })
        const restauranteSaved =  await newRestaurante.save()
        res.json(restauranteSaved) 
    } catch (error) {
        console.log(error);
    };
}

export const register_u = async (req, res) => {
    const {nombre_usuario, apellido_p, apellido_m, email_u, contraseña, zona} = req.body
    try {
        const contraseñahash = await bcrypt.hash(contraseña, 10)
        const newUsuario = new Usuario ({
            nombre_usuario,
            apellido_p,
            apellido_m,
            email_u,
            contraseña: contraseñahash,
            zona
        })
        const usuarioSaved = await newUsuario.save()
        res.send(usuarioSaved) 
    } catch (error) {
        console.log(error);
    };
}

export const login_r = async (req, res) => {
    try {
        const {email_r, contraseña} = req.body;
        const restauranteFound = await Restaurante.findOne({email_r});
        if (!restauranteFound) return res.status(400).json({message: "Cuenta inexistente"});

        const restauranteMatch = await bcrypt.compare(contraseña, restauranteFound.contraseña);
        if (!restauranteMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        res.json ({
            id: restauranteFound._id,
            email_r: restauranteFound.email_r,
            contraseña: restauranteFound.contraseña,
        }); 
    } catch (error) {
    console.log(error);
    };
}


export const login_u = async (req, res) =>  {
    try {
        const {email_u, contraseña} = req.body;
        const usuarioFound = await Usuario.findOne({email_u});
        if (!usuarioFound) return res.status(400).json({message: "Cuenta inexistente"});

        const usuarioMatch = await bcrypt.compare(contraseña, usuarioFound.contraseña);
        if (!usuarioMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        res.json ({
            id: usuarioFound._id,
            email_u: usuarioFound.email_u,
            contraseña: usuarioFound.contraseña,
        }); 
    } catch (error) {
    console.log(error);
    };
}
