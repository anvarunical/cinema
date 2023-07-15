import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Admin = new mongoose.Schema({
    isBoss: {
        type: mongoose.SchemaTypes.Boolean
    },
    firstName: {
        type: mongoose.SchemaTypes.String
    },
    lastName: {
        type: mongoose.SchemaTypes.String
    },
    phoneNumber: {
        type: mongoose.SchemaTypes.String,
        unique: true
    },
    password: {
        type: mongoose.SchemaTypes.String
    },
    roleId: {
        type: mongoose.ObjectId,
        ref: COLLECTIONS.ROLES
    },
    createdAt: {
        type: mongoose.SchemaTypes.Mixed,
        default: 0
    },
    updatedAt: {
        type: mongoose.SchemaTypes.Mixed,
    },
    deletedAt: {
        type: mongoose.SchemaTypes.Mixed,
        default: 0
    }
})

export const AdminModel = mongoose.model(COLLECTIONS.ADMINS, Admin)