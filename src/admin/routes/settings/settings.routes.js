import { Router } from "express";
import {createSettingsHandler, updateSettingsHandler} from "../../handler/settings/settings.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {SettingsSchema} from "../../../common/joi-schemas/settings.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {checkRole} from "../../../common/middleware/auth-role.js";
const router = Router()

router.post('/' ,authorization,checkRole,validateIt(SettingsSchema.create , 'body') ,createSettingsHandler)
router.put('/' , authorization ,checkRole , validateIt(SettingsSchema.update , 'body') , updateSettingsHandler)

export default router