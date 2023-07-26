import md5 from "md5";
import movieService from "../../../common/service/movie/movie.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createMovieHandler(request, response){
    try {
        const data = request.body
        console.log(data);
        const result = await movieService.create(data)
        console.log(1,result);
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

export async function updateMovieHandler(request, response){
    try {
        const data = request.body
        await movieService.updateOne(data._id, data)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getMovieHandler(request, response){
    try {
        const movies = await movieService.getAll()
        return response.json({
            message: "OK",
            data: movies
        })
    } catch (error) {
        sendError(response, error)
    }
}


export async function deleteMovieHandler(request,response){
    try {
        const {_id} = request.params
        await movieService.deleteOne(_id)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}