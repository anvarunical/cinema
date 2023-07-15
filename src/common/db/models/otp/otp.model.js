import {COLLECTIONS} from "../../../constants/collections"

export const Otp = new mongoose.Schema({
    adminId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: COLLECTIONS.ADMINS
    },
    otp: {
        type: String,
        default: null
    },
    sendAt: Date,
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

export const OtpModel = mongoose.model(COLLECTIONS.OTPS, Otp)
