import {RoleModel} from "../../db/models/roles/role.model.js";
import {BaseService} from "../base.service.js";

class RoleService extends BaseService {
    async getAll(options = {}){
        return await this.findByQuery({}, {...options, ...this.project})
    }   
    async getById(id, options = {}){
        return await this.findById(id, {...this.project, ...options})
    }
    
}

export default new RoleService(RoleModel)