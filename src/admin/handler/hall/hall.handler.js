import md5 from "md5";
import hallService from "../../../common/service/hall/hall.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createHallHandler(request, response){
    try {
        const data = request.body
        data.password = md5(data.password)
        const result = await genreService.create(data)
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
        await genreService.updateOne(data._id, data)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getHallsHandler(request, response){
    try {
        const genres = await genreService.getAll()
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
        await genreService.deleteOne(_id)
        return response.json({
            message: Hall
        })
    } catch (error) {
        sendError(response, error)
    }
}