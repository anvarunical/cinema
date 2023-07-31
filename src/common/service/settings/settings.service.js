import {SettingsModel} from "../../db/models/settings/settings.model.js";
import {BaseService} from "../base.service.js";

class SettingService extends BaseService{ }

export default new SettingService(SettingsModel)