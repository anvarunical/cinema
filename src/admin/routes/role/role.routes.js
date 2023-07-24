import {Router} from "express";
import {createRoleHandler,deleteRoleHandler,getRoleHandler,updateRoleHandler} from "../../handler/role/role.handler.js";
import {authorization} from "../../../common/middleware/auth.js";
import {roleSchema} from "../../../common/joi-schemas/role.schema.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {baseSchemas} from "../../../common/joi-schemas/base.schemas.js";
import {checkRole} from "../../../common/middleware/auth-role.js";
const router = Router()

router.route('/')
    .post(authorization,checkRole,validateIt(roleSchema.createRole,"body"),createRoleHandler)
    .get(authorization,getRoleHandler)
    .put(authorization,validateIt(roleSchema.updateRole,'body'),updateRoleHandler)

router.delete("/:_id" ,authorization , validateIt(baseSchemas.byId , 'params'), deleteRoleHandler)


export default router

