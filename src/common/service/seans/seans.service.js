import {Types} from "mongoose"
import {BaseService} from "../base.service.js"
import {SeansModel} from "../../db/models/seans/sean.model.js";
import moment from "moment/moment.js";
import movieService from "../movie/movie.service.js";
class SeanService extends BaseService {
    async getFreeSeanTimes(date, movieId, hallId){
        const dayStart = moment(date).startOf('day').toDate()
        const dayEnd = moment(date).endOf('day').toDate()
        const query = {
            date: {
                $lte: dayEnd,
                $gte: dayStart
            },
            hallId: new Types.ObjectId(hallId)
        }

        let existingSeans = await this.findByQuery(query)
        existingSeans = existingSeans.map((el) => el.shift)
        const movie = await movieService.findById(movieId)
        const duration = parseInt(movie.duration)
        const freeSeansTimes = this.#findAvailableTimeSlots(duration,existingSeans)
        return freeSeansTimes
    }

    #findAvailableTimeSlots(movieDuration, existingSeans){
        const openingTime = this.#convertTimeToMinutes('10:00');
        const closingTime = this.#convertTimeToMinutes('23:59');

        const movieDurationInMinutes = movieDuration;
    
        existingSeans.sort((a, b) => this.#convertTimeToMinutes(a.startHour) - this.#convertTimeToMinutes(b.startHour));
    
        let availableTimeSlots = [];
        let nextStartTime = openingTime;
    
        for (const seans of existingSeans) {
            const seansStart = this.#convertTimeToMinutes(seans.startHour);
            const seansEnd = this.#convertTimeToMinutes(seans.endHour);
        
            if (nextStartTime + movieDurationInMinutes <= seansStart) {
                while (nextStartTime + movieDurationInMinutes <= seansStart) {
                    const startTime = this.#convertMinutesToTime(nextStartTime);
                    const endTime = this.#convertMinutesToTime(nextStartTime + movieDurationInMinutes);
                    availableTimeSlots.push({ startHour: startTime, endHour: endTime });
                    nextStartTime += 15;
                }
            }
        
            nextStartTime = seansEnd;
        }
    
        if (nextStartTime + movieDurationInMinutes <= closingTime) {
            while (nextStartTime + movieDurationInMinutes <= closingTime) {
                const startTime = this.#convertMinutesToTime(nextStartTime);
                const endTime = this.#convertMinutesToTime(nextStartTime + movieDurationInMinutes);
                availableTimeSlots.push({ startHour: startTime, endHour: endTime });
                nextStartTime += 15;
            }
        }
    
        return availableTimeSlots;
    }

    #convertTimeToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        return hours * 60 + minutes;
    }

    #convertMinutesToTime(minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
    }
}

export default new SeanService(SeansModel)