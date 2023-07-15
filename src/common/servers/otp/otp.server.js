import {OtpModel} from "../../db/models/otp/otp.model.js";
import {BaseService} from "../base.service.js";

class OtpService extends BaseService {}

export default new OtpService(OtpModel)