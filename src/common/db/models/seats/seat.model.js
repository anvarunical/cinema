import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Seat = new mongoose.Schema({
    seansId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: COLLECTIONS.SEANS
    },
    raw: {
        type: mongoose.SchemaTypes.Number
    },
    seat: {
        type: mongoose.SchemaTypes.Number
    },
    isOrdered: {
        type: mongoose.SchemaTypes.Boolean,
        default: false
    }
})

export const SeatModel = mongoose.model(COLLECTIONS.SEATS, Seat)