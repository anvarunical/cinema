import {GenreModel} from "../../db/models/genres/genre.model.js";
import {GenreModel} from "../../db/models/genres/genre.model.js";
import {BaseService} from "../base.service.js";

class GenreService extends BaseService {
    project = {
        name: 1
    }
    async getAll(options = {}){
        return await this.findByQuery({}, {...options, ...this.project})
    }   

    
}

export default new GenreService(GenreModel)