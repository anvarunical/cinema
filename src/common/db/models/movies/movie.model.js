import mongoose, {mongo} from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Movie = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String
    },
    duration: {
        type: mongoose.SchemaTypes.String
    },
    director: {
        type: mongoose.SchemaTypes.String
    },
    filmedAt: {
        type: mongoose.SchemaTypes.Date
    },
    actors: {
        type: mongoose.SchemaTypes.Array
    },
    genres: {
        type: mongoose.SchemaTypes.Array
    },
    country: {
        type: mongoose.SchemaTypes.Array
    },
    trailerUrl: {
        type: mongoose.SchemaTypes.String
    },
    posterUrl: {
        type: mongoose.SchemaTypes.String
    },
    pg: {
        type: mongoose.SchemaTypes.Number
    },
    price: {
        type: mongoose.SchemaTypes.Number
    },
    dimension: {
        type: mongoose.SchemaTypes.String,
        enum : ['2D','3D']
    },
    isPremiere: {
        type: mongoose.SchemaTypes.Boolean
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

export const MovieModel = mongoose.model(COLLECTIONS.MOVIE, Movie)