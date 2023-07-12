import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Role = new mongoose.Schema({
    name: mongoose.SchemaTypes.String,

    // admin
    addAdmin: mongoose.SchemaTypes.Boolean,
    updateAdmin: mongoose.SchemaTypes.Boolean,
    deleteAdmin: mongoose.SchemaTypes.Boolean,

    // genres
    addGenre: mongoose.SchemaTypes.Boolean,
    updateGenre: mongoose.SchemaTypes.Boolean,
    deleteGenre: mongoose.SchemaTypes.Boolean,

    // hall
    addHall: mongoose.SchemaTypes.Boolean,
    updateHall: mongoose.SchemaTypes.Boolean,
    deleteHall: mongoose.SchemaTypes.Boolean,

    // movie
    addMovie: mongoose.SchemaTypes.Boolean,
    updateMovie: mongoose.SchemaTypes.Boolean,
    deleteMovie: mongoose.SchemaTypes.Boolean,

    // role
    addRole: mongoose.SchemaTypes.Boolean,
    updateRole: mongoose.SchemaTypes.Boolean,
    deleteRole: mongoose.SchemaTypes.Boolean,

    // seans
    addSeans: mongoose.SchemaTypes.Boolean,
    updateSeans: mongoose.SchemaTypes.Boolean,
    deleteSeans: mongoose.SchemaTypes.Boolean,

    // seat
    addSeat: mongoose.SchemaTypes.Boolean,
    updateSeat: mongoose.SchemaTypes.Boolean,
    deleteSeat: mongoose.SchemaTypes.Boolean,

    // settings
    addSettings: mongoose.SchemaTypes.Boolean,
    updateSettings: mongoose.SchemaTypes.Boolean,
    deleteSettings: mongoose.SchemaTypes.Boolean,
})

export const RoleModel = mongoose.model(COLLECTIONS.ROLES, Role)