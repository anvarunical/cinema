import {AdminModel} from "../../db/models/admins/admin.model.js";
import {BaseService} from "../base.service.js";

class AdminService extends BaseService {}

export default new AdminService(AdminModel)