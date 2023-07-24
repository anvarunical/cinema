import {HallModel} from "../../db/models/halls/hall.model.js";
import {BaseService} from "../base.service.js";

class HallService extends BaseService {
    project = {
        number: 1,
        raws: 1,
        seats: 1,
        isVip: 1
    }
    async getAll(options = {}){
        return await this.findByQuery({deletedAt : 0}, {...options, ...this.project})
    }   

    async getById(id, options = {}){
        return await this.findById(id, {...this.project, ...options})
    }
}

export default new HallService(HallModel)