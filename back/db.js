import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Pruebas:pruebas123@cluster0.giq0axj.mongodb.net/PWEB')
        console.log(">> Furula")
    } catch (error) {
        console.log(error)
    }
};
