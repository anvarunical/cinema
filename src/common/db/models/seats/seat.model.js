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

export const SeatModel = mongoose.model(COLLECTIONS.SEATS, Seat)