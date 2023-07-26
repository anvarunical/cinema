import md5 from "md5";
import movieService from "../../../common/service/movie/movie.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createMovieHandler(request, response){
    try {
        const data = request.body
        const result = await movieService.create(data)
        return response.json({
            message: "OK",
            data: result
        })
    } catch (error) {
        return sendError(response , error)
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

export async function getMoviesHandler(request, response){
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