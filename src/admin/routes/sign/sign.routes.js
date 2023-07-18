import express from "express";
import {validateIt} from "../../../common/middleware/validate.js";
import {adminSchemas} from "../../../common/joi-schemas/admin.schema.js";
import {loginHandler, resetPasswordHandler, resetPasswordOtpHandler, resetPasswordOtpVerifyHandler} from "../../handler/sign/sign.handler.js";
import {authorization} from "../../../common/middleware/auth.js";

const route = express.Router()

route.post('/login', validateIt(adminSchemas.login,'body'),loginHandler)
route.post('/password-reset', resetPasswordOtpHandler)
route.post('/password-reset-verify', resetPasswordOtpVerifyHandler)
route.put('/password-reset', authorization, resetPasswordHandler)

export default route