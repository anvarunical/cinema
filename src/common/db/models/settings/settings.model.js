import mongoose from "mongoose";
import {COLLECTIONS} from "../../../constants/collections.js";

const TimePercentSchema = mongoose.Schema({
    fromHour: mongoose.SchemaTypes.String,
    toHour: mongoose.SchemaTypes.String,
    percent: mongoose.SchemaTypes.Number
  });

export const Settings = new mongoose.Schema({
    vipPercent: mongoose.SchemaTypes.Number,
    timesPercent: {
        type: [TimePercentSchema]
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