import {Types} from "mongoose"
import {BaseService} from "../base.service.js"
import {SeansModel} from "../../db/models/seans/sean.model.js";
import movieService from "../movie/movie.service.js";

class SeanService extends BaseService {
    async getFreeSeanTimes(date, movieId, hallId){
        const seanss = await this.model.find({date : new Date(date) , hallId : new Types.ObjectId(hallId) , deletedAt: 0}).sort({"shift.startHour":1})
        if(!seanss.length) return [{start:"10:00"  , end : "23:59"}]
        const busyTimes  = []
        seanss.forEach(el => busyTimes.push(el.shift))
        // console.log(busyTimes);
        // console.log(busyTimes);
        const freeTimes = [] 

        let digit = 0
        const movie = await movieService.findById(movieId)
        digit = Math.floor(parseInt(movie.duration)/60)*100+parseInt(movie.duration)%60

        for(let i = 0 ; i< busyTimes.length - 1 ; i++){
            if(busyTimes[i].endHour != busyTimes[i+1].startHour) freeTimes.push({start : busyTimes[i].endHour , 
                end : busyTimes[i+1].startHour})
        }

        if(busyTimes[0].startHour!="10:00")
            freeTimes.unshift({start:"10:00" , end:busyTimes[0].startHour})

        if(busyTimes[busyTimes.length-1].endHour != "23:59")
            freeTimes.push({start :busyTimes[busyTimes.length-1].endHour  , end : "23:59"})
        // console.log(freeTimes);
        const result = []
        
        for(let i = 0 ; i< freeTimes.length ; i++){
            let a = parseInt(freeTimes[i].start.slice(0 , 2))*100 + parseInt(freeTimes[i].start.slice(3 , 5))
            let b = parseInt(freeTimes[i].end.slice(0 , 2))*100 + parseInt(freeTimes[i].end.slice(3 , 5))
            if(b-a>digit){
                let number = b-digit
                if(number%100>60){
                    number = (parseInt(number/100)+1)*100+number%100%60
                }
                result.push({start : freeTimes[i].start , end : (parseInt(number/100)+'').padStart(2 , '0')+":"+(parseInt(number%100)+'').padStart(2 , '0')} )
            }
        }
        return result
        // console.log(parseInt(movie.duration));
    }
}

export default new SeanService(SeansModel)