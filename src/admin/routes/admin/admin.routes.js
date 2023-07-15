import express from "express";
import {createAdminHandler} from "../../handler/admin/admin.handler.js";
import {validateIt} from "../../../common/middleware/validate.js";
import {adminSchemas} from "../../../common/joi-schemas/admin.schema.js";

const routes = express.Router()

routes.route('/')
    .post(validateIt(adminSchemas.createAdmin, 'body'),createAdminHandler)

export default routes