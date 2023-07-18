import jwt from "jsonwebtoken"
import {ENV} from "../config.js"
import adminService from "../servers/admin/admin.service.js"
import {Types} from "mongoose"

export async function authorization(request,response, next){
    try {
        const token = request.headers['token']
        if(!token) throw new Error("token must be provided")
        const payload = jwt.verify(token, ENV.TOKEN_SECRET_KEY)
        switch (payload?.type) {
            case "admin": {
                request.admin = adminService.findById(new Types.ObjectId(payload._id))
                break
            }
            default:
                break;
        }
        next()
    } catch (error) {
        response.json({
            error: error.message
        })
    }
}