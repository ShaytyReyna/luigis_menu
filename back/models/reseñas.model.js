import mongoose from "mongoose"

const reseñaSchema = new mongoose.Schema({
    Reseña:{
        type: String,
        trim: true
    },
    
}, {
    timestamps: true
})

export default mongoose.model('Reseñas', reseñaSchema)