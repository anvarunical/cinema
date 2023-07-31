import seatService from "../../../common/service/seat/seat.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function getSeatsHandler(request , response){
    try {
        const {seansId} = request.body
        const seats = seatService.get(seansId)
        return response.json({
            message : "Ok"  , 
            data : seats
        })
    } catch (error) {
        sendError(response , error)
    }
}