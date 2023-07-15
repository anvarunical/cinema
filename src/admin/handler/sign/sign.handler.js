import md5 from "md5";
import adminService from "../../../common/servers/admin/admin.service.js";
import jwt from 'jsonwebtoken'
import {ENV} from "../../../common/config.js";

export async function loginHandler(request,response){
    try {
        const data = request.body
        const user = await adminService.findOne({phoneNumber: data.phoneNumber})
        if(!user) throw new Error("User not found!")
        console.log(md5(data.password),user.password);
        if(md5(data.password) !== user.password){
            throw new Error("Incorrect password!")
        }

        const token = jwt.sign({type: "admin", _id: user._id}, ENV.TOKEN_SECRET_KEY)

        return response.json({
            data: user,
            token
        })
    } catch (error) {
        console.log(error);
    }
}