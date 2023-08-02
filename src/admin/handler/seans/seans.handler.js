import hallService from "../../../common/service/hall/hall.service.js";
import movieService from "../../../common/service/movie/movie.service.js";
import seansService from "../../../common/service/seans/seans.service.js";
import seatService from "../../../common/service/seat/seat.service.js";
import settingsService from "../../../common/service/settings/settings.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";



export async function getFreeSeanShiftHandler(request, response){
    try {
        const {date, movieId, hallId} = request.body
        const result = await seansService.getFreeSeanTimes(date , movieId , hallId)
        return response.json({
            data : result
        })
    } catch (error) {
        sendError( response, error)
    }   
}

export async function createSeansHandler(request , response){
    // try {
    //     const data = request.body
    //     const hall = await hallService.findById(data.hallId)
    //     const movie = await movieService.findById(data.movieId)
    //     const settings = await settingsService.findByQuery({})
    //     if(settings.length) data.price = movie.price
    //     else data.price = movie.price * 
    //     data.availableSeatsCount = hall.raw * hall.seats
    //     const result = await seansService.create(data)
    //     for(let i = 1 ; i<=hall.raws ; i++){
    //         for(let j=1 ; j<=hall.seats ; j++)
    //         await seatService.create({
    //             seansId : result , 
    //             raw : i , 
    //             seat : j
    //         })
    //     }
    //     response.json({
    //         message : "Ok" , 
    //         data : result
    //     })
    // } catch (error) {
    //     sendError(response , error)
    // }
}