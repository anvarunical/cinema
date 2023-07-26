import md5 from "md5";
import roleService from "../../../common/service/role/role.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createRoleHandler(request, response){
    try {
        const data = request.body
        const result = await roleService.create(data)
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

export async function updateRoleHandler(request, response){
    try {
        const data = request.body
        await roleService.updateOne(data._id, data)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}

export async function getRoleHandler(request, response){
    try {
        const movies = await roleService.getAll()
        return response.json({
            message: "OK",
            data: movies
        })
    } catch (error) {
        sendError(response, error)
    }
}


export async function deleteRoleHandler(request,response){
    try {
        const {_id} = request.params
        await roleService.deleteOne(_id)
        return response.json({
            message: "OK",
        })
    } catch (error) {
        sendError(response, error)
    }
}