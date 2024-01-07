import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    nombre_usuario:{
        type: String,
        requiered: true,
        trim: true
    },
    apellido_p:{
        type: String,
        requiered: true,
        trim: true
    },
    apellido_m:{
        type: String,
        requiered: true,
        trim: true
    },
    email_u:{
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
    zona:{
        type: String,
        requiered: true,
        trim: true
    },
}, {
    timestamps: true
})

export default mongoose.model('Usuario', usuarioSchema)