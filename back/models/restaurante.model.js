import mongoose from "mongoose"

const restauranteSchema = new mongoose.Schema({
    nombre_restaurante:{
        type: String,
        requiered: true,
        trim: true
    },
    email_r:{
        type: String,
        requiered: true,
        trim: true,
        unique: true
    },
    contraseña:{
        type: String,
        requiered: true,
        trim: true
    },
    descripcion:{
        type: String,
        requiered: true,
        trim: true
    },
    direccion:{
        type: String,
        requiered: true,
        trim: true
    },
    comida:{
        type: String,
        requiered: true,
        trim: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Restaurante', restauranteSchema)