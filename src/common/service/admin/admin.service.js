import {AdminModel} from "../../db/models/admins/admin.model.js";
import {BaseService} from "../base.service.js";

class AdminService extends BaseService {
    project = {
        firstName: 1,
        lastName: 1,
        phoneNumber: 1,
        roleId: 1
    }
    async getAll(options = {}){
        return await this.findByQuery({}, {...options, ...this.project})
    }   

    async getById(id, options = {}){
        return await this.findById(id, {...this.project, ...options})
    }
}

export default new AdminService(AdminModel)