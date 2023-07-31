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
    price: {
        type: mongoose.SchemaTypes.Number
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

export const SeansModel = mongoose.model(COLLECTIONS.SEANS, Seans)


/*
    11:30 - 13:50
    17:35 - 19:00
    22:00 - 23:59
*/

/*
    10:00 - 11:30
    13:50 - 17:35
    19:00 - 22:00
*/