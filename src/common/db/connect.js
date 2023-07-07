import mongoose from "mongoose";
import {ENV} from "../config.js";

export const connectDb = async function (){
    try {
        mongoose.set({debug:true})
        await mongoose.connect(ENV.DB_URL)
    } catch (error) {
        console.log(error);
    }
}