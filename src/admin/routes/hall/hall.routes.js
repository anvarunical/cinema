import express from "express";
import {createHallHandler, deleteHallHandler, getHallsHandler, updateHallHandler} from "../../handler/hall/hall.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {hallSchemas} from "../../../common/joi-schemas/hall.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";
import {checkRole} from "../../../common/middleware/auth-role.js";

const routes = express.Router()

routes.route('/')
    .post(authorization, checkRole,validateIt(hallSchemas.createHall, 'body'),createHallHandler)
    .put(authorization, checkRole,validateIt(hallSchemas.updateHall, 'body'), updateHallHandler)
    .get(authorization, getHallsHandler)

routes.delete('/:_id',authorization, checkRole,validateIt(baseSchemas.byId, 'params'), deleteHallHandler)

export default routes