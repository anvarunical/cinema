import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Role = new mongoose.Schema({
    name: mongoose.SchemaTypes.String,

    // admin
    addAdmin: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateAdmin: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteAdmin: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // genres
    addGenre: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateGenre: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteGenre: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // hall
    addHall: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateHall: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteHall: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // movie
    addMovie: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateMovie: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteMovie: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // role
    addRole: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateRole: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteRole: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // seans
    addSeans: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateSeans: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteSeans: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // seat
    addSeat: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateSeat: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteSeat: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },

    // settings
    addSettings: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    updateSettings: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deleteSettings: {
        type : mongoose.SchemaTypes.Boolean,
        default : false
    },
    deletedAt : {
        type : mongoose.SchemaTypes.Mixed , 
        default : 0
    }
})

export const RoleModel = mongoose.model(COLLECTIONS.ROLES, Role)