import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

export const Admin = new mongoose.Schema({
    firstName: {
        type: mongoose.SchemaTypes.String
    },
    lastName: {
        type: mongoose.SchemaTypes.String
    },
    phoneNumber: {
        type: mongoose.SchemaTypes.String
    },
    password: {
        type: mongoose.SchemaTypes.String
    },
    roleId: {
        type: mongoose.ObjectId,
        ref: COLLECTIONS.ROLES
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

export const AdminModel = mongoose.model(COLLECTIONS.ADMINS, Admin)