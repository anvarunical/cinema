import { Router } from "express";
import {authorization} from "../../../common/middleware/auth.js";
import {imageUpload, trailerUpload} from "../../handler/upload/upload.handler.js";

const router = Router()

router.post('/image'  , authorization ,imageUpload )
router.post("/trailer" , authorization , trailerUpload)

export default router