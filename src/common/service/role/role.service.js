import {RoleModel} from "../../db/models/roles/role.model.js";
import {BaseService} from "../base.service.js";


class RoleService extends BaseService{
    async findMany(){
        return await this.model.find({deletedAt : 0} , {deletedAt: 0, __v: 0})
    }
}

export default new RoleService(RoleModel)