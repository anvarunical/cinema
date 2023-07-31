import express from "express";
import {createAdminHandler, deleteAdminHandler, getAdminByIdHandler, getAdminsHandler, updateAdminHandler} from "../../handler/admin/admin.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {adminSchemas} from "../../../common/joi-schemas/admin.schema.js";
import {authorization} from "../../../common/middleware/auth.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";
import {checkRole} from "../../../common/middleware/auth-role.js";

const routes = express.Router()

routes.route('/')
    .post(authorization,checkRole, validateIt(adminSchemas.createAdmin, 'body'),createAdminHandler)
    .put(authorization, checkRole,validateIt(adminSchemas.updateAdmin, 'body'), updateAdminHandler)
    .get(authorization, getAdminsHandler)

routes.delete('/:_id',authorization, checkRole,validateIt(baseSchemas.byId, 'params'), deleteAdminHandler)
routes.get('/:_id',authorization, validateIt(baseSchemas.byId, 'params'), getAdminByIdHandler)

export default routes