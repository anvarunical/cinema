import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

const TimePercentSchema = mongoose.Schema({
    fromHour: mongoose.SchemaTypes.String,
    toHour: mongoose.SchemaTypes.String,
    percent: mongoose.SchemaTypes.Number
  });

export const Settings = new mongoose.Schema({
    vip: {
        type: mongoose.SchemaTypes.Number,
        default: 0
    },
    times: {
        _id: false,
        type: [TimePercentSchema]
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

// const settings = {
//     vipPercent: 10,
//     timesPercent: [
//         {
//             fromHour: '17:00',
//             toHour: '23:59',
//             percent: 10
//         },
//         {
//             fromHour: '17:00',
//             toHour: '23:59',
//             percent: 10
//         }
//     ]
// }

export const SettingsModel = mongoose.model(COLLECTIONS.SETTINGS, Settings)