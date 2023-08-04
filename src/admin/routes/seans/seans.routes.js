import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {createSeansHandler, deleteSeansHandler, getFreeSeanShiftHandler} from "../../handler/seans/seans.handler.js";
import {SeansSchema} from "../../../common/joi-schemas/seans.schema.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";


const router = Router()

router.post('/freeTimes', authorization, validateIt(SeansSchema.getFreeSeansShift), getFreeSeanShiftHandler)
router.post('/', authorization, validateIt(SeansSchema.createSeans), createSeansHandler)
router.delete('/:_id', authorization, validateIt(baseSchemas.byId, 'params'), deleteSeansHandler)

export default router