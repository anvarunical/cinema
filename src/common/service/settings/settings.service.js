import {SettingsModel} from "../../db/models/settings/settings.model.js";
import {BaseService} from "../base.service.js";

class SettingService extends BaseService{
    async findAll(){
        try {
            return await this.model.find()
        } catch (error) {
            console.log(error.message)
        }
    }
}

export default new SettingService(SettingsModel)