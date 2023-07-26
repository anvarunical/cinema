import {MovieModel} from "../../db/models/movies/movie.model.js";
import {BaseService} from "../base.service.js";

class MovieService extends BaseService {
    project = {
        name: 1,
        duration: 1,
        director: 1,
        filmedAt: 1,
        actors: 1,
        genres: 1,
        country: 1,
        trailerUrl: 1,
        posterUrl: 1,
        pg: 1,
        price: 1,
        dimension: 1,
        isPremiere: 1
    }
    async getAll(options = {}){
        return await this.findByQuery({}, {...options, ...this.project})
    }   
    async getById(id, options = {}){
        return await this.findById(id, {...this.project, ...options})
    }
    
}

export default new MovieService(MovieModel)