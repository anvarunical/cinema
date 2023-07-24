import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Genre = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String
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

export const GenreModel = mongoose.model(COLLECTIONS.GENRES,Genre)