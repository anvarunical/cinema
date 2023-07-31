import {sendError} from "../../../common/utils/error-sender.utils";

export async function createSeansHandler(request, response){
    
}

export async function getFreeSeanShiftHandler(request, response){
    try {
        const {date, movieId, hallId} = request.body
        const result = await SeanS
    } catch (error) {
        sendError(error)
    }   
}