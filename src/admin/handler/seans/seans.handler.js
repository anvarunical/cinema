import {Types} from "mongoose";
import hallService from "../../../common/service/hall/hall.service.js";
import movieService from "../../../common/service/movie/movie.service.js";
import seansService from "../../../common/service/seans/seans.service.js";
import seatService from "../../../common/service/seat/seat.service.js";
import settingsService from "../../../common/service/settings/settings.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";
import {CommonException} from "../../../common/exeptions/index.js";

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

export async function createSeansHandler(request, response){
    try {
        const data = request.body
        const hall = await hallService.findById(data.hallId)
        const movie = await movieService.findById(data.movieId)
        const [settings] = await settingsService.findByQuery({})
        const [timePercent] = settings.times.filter((el) => el.fromHour < data.shift.startHour && el.toHour > data.shift.startHour)
        const vipPercent = hall.isVip ? settings.vip : 0
        let totalPercent = vipPercent + (timePercent?.percent || 0)
        data.price = movie.price + movie.price / 100 * totalPercent
        data.price = Math.floor(data.price / 1000) * 1000
        const result = await seansService.create(data)

        for(let i = 1; i <= hall.raws; i++){
            for(let j = 1; j <= hall.seats; j++){
                await seatService.create({
                    seansId: result, 
                    raw: i, 
                    seat: j
                })
            }
        }
        response.json({
            message: "Ok" , 
            data: result
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function deleteSeansHandler(request, response){
    try {
        const {_id} = request.params
        const orderedSeats = await seatService.findByQuery({seansId: new Types.ObjectId(_id), isOrdered: true})
        if(orderedSeats.length) throw CommonException.NotEnoughPermission("Has ordered tickets")
        await seatService.deleteMany({seansId: new Types.ObjectId(_id)})
        await seansService.deleteOne(_id)
        return response.json({
            message: 'OK',
            data: _id
        })
    } catch (error) {
        sendError(response, error)
    }
}