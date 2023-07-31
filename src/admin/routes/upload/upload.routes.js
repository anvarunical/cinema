import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {fileUpload} from "../../handler/upload/upload.handler.js";
import {checkRole} from "../../../common/middleware/auth-role.js";

const router = Router()

router.post('/'  , authorization, checkRole,fileUpload )
// router.post("/trailer" , authorization , trailerUpload)

export default router