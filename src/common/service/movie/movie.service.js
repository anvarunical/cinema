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
        if(data.filmedAt){
            query.filmedAt = data.filmedAt
        }
        if(data.country){
            query.country = {
                $in: data.country
            }
        }
        if(data.pgFrom){
            query.pg.$gte = data.pgFrom
        }
        if(data.pgTo){
            query.pg.$lte = data.pgTo
        }
        if(data.priceFrom){
            query.price.$gte = data.priceFrom
        }
        if(data.priceTo){
            query.pg.$lte = data.priceTo
        }

        if([true, false].includes(data.isPremiere)) query.isPremiere = data.isPremiere
        if(data.search){
            query.name = {
                $regex: data.search,
                $options: 'i'
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
        return await this.findPaging(query,data,pipeline, options)
    }   

    
}

export default new MovieService(MovieModel)