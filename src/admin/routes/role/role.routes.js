import express from "express";
import {createRoleHandler, deleteRoleHandler, getRoleHandler, updateRoleHandler} from "../../handler/role/role.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {roleSchemas} from "../../../common/joi-schemas/role.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";

const routes = express.Router()

routes.route('/')
    .post(authorization, validateIt(roleSchemas.createMovie, 'body'),createRoleHandler)
    .put(authorization, validateIt(roleSchemas.updateMovie, 'body'), updateRoleHandler)
    .get(authorization, getRoleHandler)

routes.delete('/:_id',authorization, validateIt(baseSchemas.byId, 'params'), deleteRoleHandler)

export default routes