import { Router } from "express";
import {createSettingsHandler, getSettingsHandler, updateSettingsHandler} from "../../handler/settings/settings.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {SettingsSchema} from "../../../common/joi-schemas/settings.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
const router = Router()

router.get('/' , authorization, getSettingsHandler)
router.post('/' ,authorization,validateIt(SettingsSchema.create , 'body') ,createSettingsHandler)
router.put('/' , authorization , validateIt(SettingsSchema.update , 'body') , updateSettingsHandler)

export default router