import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./db/db.js";

dotenv.config({path: "./env"})

dbConnect();
// ;(async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}`)
//     } catch (error) {
//         console.log("Error: ",{error});
//     }
// })