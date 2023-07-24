import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Hall = new mongoose.Schema({
    number: {
        type: mongoose.SchemaTypes.Number,
        unique:true
    },
    raws: {
        type: mongoose.SchemaTypes.Number
    },
    seats: {
        type: mongoose.SchemaTypes.Number
    },
    isVip: {
        type: mongoose.SchemaTypes.Boolean
    },
    createdAt: {
        type: mongoose.SchemaTypes.Mixed,
        default: 0
    },
    updatedAt: {
        type: mongoose.SchemaTypes.Mixed,
        default: 0
    },
    deletedAt: {
        type: mongoose.SchemaTypes.Mixed,
        default: 0
    }
})

export const HallModel = mongoose.model(COLLECTIONS.HALLS,Hall)