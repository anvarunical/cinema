import md5 from "md5";
import adminService from "../../../common/service/admin/admin.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createAdminHandler(request, response){
    try {
        const data = request.body
        data.password = md5(data.password)
        const result = await adminService.create(data)
        return response.json({
            message: "OK",
            data: result
        })
    } catch (error) {
        return response.json({
            code: error.code,
            data: error.keyValue
        })
    }
}

export async function updateAdminHandler(request, response){
    try {
        const data = request.body
        await adminService.updateOne(data._id, data)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getAdminsHandler(request, response){
    try {
        const admins = await adminService.getAll()
        return response.json({
            message: "OK",
            data: admins
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getAdminByIdHandler(request, response){
    try {
        const {_id} = request.params
        const admin = await adminService.getById(_id)
        return response.json({
            message: "OK",
            data: admin
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function deleteAdminHandler(request,response){
    try {
        const {_id} = request.params
        await adminService.deleteOne(_id)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}