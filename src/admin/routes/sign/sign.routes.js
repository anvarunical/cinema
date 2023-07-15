import express from "express";
import {validateIt} from "../../../common/middleware/validate.js";
import {adminSchemas} from "../../../common/joi-schemas/admin.schema.js";
import {loginHandler} from "../../handler/sign/sign.handler.js";

const route = express.Router()

route.post('/login', validateIt(adminSchemas.login,'body'),loginHandler)

export default route