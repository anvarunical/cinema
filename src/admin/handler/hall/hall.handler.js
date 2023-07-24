import md5 from "md5";
import hallService from "../../../common/service/hall/hall.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createHallHandler(request, response){
    try {
        const data = request.body
        const result = await hallService.create(data)
        console.log(result);
        return response.json({
            message: "OK",
            data: result
        })
    } catch (error) {
        return response.json({
            code: error.code,
            data: error.keyValue
        })
    }
}

export async function updateHallHandler(request, response){
    try {
        const data = request.body
        await hallService.updateOne(data._id, data)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getHallsHandler(request, response){
    try {
        const genres = await hallService.getAll()
        return response.json({
            message: "OK",
            data: genres
        })
    } catch (error) {
        sendError(response, error)
    }
}


export async function deleteHallHandler(request,response){
    try {
        const {_id} = request.params
        const result = await hallService.deleteOne(_id)
        return response.json({
            message: "Ok",
            data : result
        })
    } catch (error) {
        sendError(response, error)
    }
}