import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {createSeansHandler, getFreeSeanShiftHandler} from "../../handler/seans/seans.handler.js";
import {SeansSchema} from "../../../common/joi-schemas/seans.schema.js";


const router = Router()

router.post('/freeTimes' , authorization , validateIt(SeansSchema.getFreeSeansShift) , getFreeSeanShiftHandler)
router.post('/' , authorization , validateIt() , createSeansHandler)

export default router