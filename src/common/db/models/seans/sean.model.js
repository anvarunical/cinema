import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Seans = new mongoose.Schema({
    movieId: {
        type: mongoose.ObjectId,
        ref: COLLECTIONS.MOVIE
    },
    hallId: {
        type: mongoose.ObjectId,
        ref: COLLECTIONS.MOVIE
    },
    availableSeatsCount: {
        type: mongoose.SchemaTypes.Number
    },
    date: {
        type: mongoose.SchemaTypes.Date
    },
    shift: {
        startHour: mongoose.SchemaTypes.String,
        endHour: mongoose.SchemaTypes.String,
    },
    seats: {
        type: mongoose.SchemaTypes.Number
    },
    isVip: {
        type: mongoose.SchemaTypes.Boolean
    },
    price: {
        type: mongoose.SchemaTypes.Number
    },
    createAt: {
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

export const SeansModel = mongoose.model(COLLECTIONS.SEANS, Seans)