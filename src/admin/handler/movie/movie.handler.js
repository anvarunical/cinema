import md5 from "md5";
import movieService from "../../../common/service/movie/movie.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";
import {Types} from "mongoose";

export async function createMovieHandler(request, response){
    try {
        const data = request.body
        data.genres = data.genres.map((el) => new Types.ObjectId(el))
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
        if(data.genres){
            data.genres = data.genres.map((el) => new Types.ObjectId(el))
        }
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
        const data = request.body
        const movies = await movieService.getAll(data)
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