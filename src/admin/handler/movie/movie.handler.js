import md5 from "md5";
import movieService from "../../../common/service/movie/movie.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function creatMovieHandler(request, response){
    try {
        const data = request.body
        data.password = md5(data.password)
        const result = await movieService.create(data)
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

export async function updatMovieHandler(request, response){
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


export async function deletMovieHandler(request,response){
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