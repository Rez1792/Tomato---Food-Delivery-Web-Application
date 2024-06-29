import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jmpatel7358:9265130433@cluster0.gpwkydp.mongodb.net/Mern-Stack-Projects')
    .then(()=>{
        console.log("DB Connected");
    })
}