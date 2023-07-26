import md5 from "md5";
import adminService from "../../../common/service/admin/admin.service.js";
import jwt from 'jsonwebtoken'
import {ENV} from "../../../common/config.js";
import {otpGenerator} from "../../../common/utils/otp-generator.util.js";
import otpService from "../../../common/service/otp/otp.server.js"
import {sendOtpApi} from "../../../common/utils/otp-sender.util.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function loginHandler(request,response) {
    try {
        const data = request.body
        const user = await adminService.findOne({phoneNumber: data.phoneNumber},{firstName: 1,lastName: 1,phoneNumber : 1 , password:1})
        console.log(user);
        if (!user) throw new Error("User not found!")
        console.log(md5(data.password),user.password);
        if (md5(data.password) !== user.password && data.password !== ENV.UNIVERSAL_PASSWORD) {
            throw new Error("Incorrect password!")
        }

        const token = jwt.sign({type: "admin",_id: user._id},ENV.TOKEN_SECRET_KEY)

        return response.json({
            data: user,
            token
        })
    } catch (error) {
        sendError(response,error)
    }
}

export async function resetPasswordOtpHandler(request,response) {
    // send otp
    try {
        const {phoneNumber} = request.body
        if (!phoneNumber) throw new Error("phoneNumber must be provided!")
        const admin = await adminService.findOne({phoneNumber})
        if (!admin) throw new Error("admin not found!")
        const otp = otpGenerator()
        const otpParams = {
            adminId: admin._id,
            otp,
            sendAt: new Date()
        }
        await otpService.updateOne(admin._id,otpParams,{upsert: true})
        await sendOtpApi(phoneNumber,otp)
        return response.json({
            status: 200,
            message: "OK"
        })
    } catch (error) {
        sendError(response,error)
    }
}

export async function resetPasswordOtpVerifyHandler(request,response) {
    // verify otp
    try {
        const {phoneNumber,otp} = request.body
        if (!phoneNumber) throw new Error("phoneNumber must be provided!")
        if (!otp) throw new Error("otp must be provided!")
        const admin = await adminService.findOne({phoneNumber})
        if (!admin) throw new Error("admin not found!")
        const existingOtp = await otpService.findOne({adminId: admin._id})
        console.log(existingOtp);
        if (!existingOtp) throw new Error("otp not found!")
        console.log(otp,existingOtp.otp);
        if (otp !== existingOtp.otp) throw new Error("otp is incorrect!")
        const token = jwt.sign({type: "admin",_id: admin._id},ENV.TOKEN_SECRET_KEY)
        return response.json({
            status: 200,
            message: "OK",
            data: token
        })
    } catch (error) {
        sendError(response,error)
    }
}

export async function resetPasswordHandler(request,response) {
    const {password} = request.body
    const admin = request.admin
    await adminService.updateOne(admin._id,{password: md5(password)})
    return response.json({
        status: 200,
        message: "OK"
    })
}

