import mongoose from "mongoose"

const usuarioSchema = new mongoose.Schema({
    username:{
        type: String,
        requiered: true,
        trim: true
    },
    apellido_p:{
        type: String,
        trim: true
    },
    apellido_m:{
        type: String,
        trim: true
    },
    email:{
        type: String,
        requiered: true,
        trim: true,
        unique: true
    },
    genero:{
        type: String,
        requiered: true,
    },
    zona:{
        type: String,
        requiered: true,
    },
    password:{
        type: String,
        requiered: true,
        trim: true
    },
}, {
    timestamps: true
})

export default mongoose.model('User', usuarioSchema)