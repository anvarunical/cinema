import {SeatModel} from "../../db/models/seats/seat.model.js";
import {BaseService} from "../base.service.js";
import { Types } from "mongoose";
class SeatService extends BaseService{
    async get(seansId){
        try {
            return this.model.find({seansId: new Types.ObjectId(seansId)})
        } catch (error) {
            console.log(error);
        }
    }
}

export default new SeatService(SeatModel)