import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {getSeatsHandler} from "../../handler/seats/seat.handler.js";
const router = Router()

router.post('/' , authorization , getSeatsHandler)

export default router