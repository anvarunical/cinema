import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {fileUpload} from "../../handler/upload/upload.handler.js";

const router = Router()

router.post('/'  , authorization ,fileUpload )
// router.post("/trailer" , authorization , trailerUpload)

export default router