import {Types} from "mongoose";
import {COLLECTIONS} from "../../constants/collections.js";
import {MovieModel} from "../../db/models/movies/movie.model.js";
import {BaseService} from "../base.service.js";

class MovieService extends BaseService {
    project = {
        name: 1,
        duration: 1,
        director: 1,
        filmedAt: 1,
        actors: 1,
        country: 1,
        trailerUrl: 1,
        posterUrl: 1,
        pg: 1,
        price: 1,
        dimension: 1,
        isPremiere: 1
    }
    async getAll(data = {}, options = {}){
        const query = {}
        if(data.genres){
            data.genres = data.genres.map((el) => new Types.ObjectId(el))
            query.genres = {
                $in: data.genres
            }
        }
        const $lookupGenres = {
            $lookup: {
                from: COLLECTIONS.GENRES,
                localField: 'genres',
                foreignField: '_id',
                pipeline: [
                   {
                        $match: {
                            deletedAt: 0
                        }
                   },
                   {
                        $project: {
                            name: 1
                        }
                   }
                ],
                as: 'genre'
            }
        }

        this.project.genre = 1

        const $project = {
            $project: this.project
        }

        const pipeline = [
            $lookupGenres,
            $project
        ]
        return await this.aggregate(query,pipeline, options)
    }   

    
}

export default new MovieService(MovieModel)