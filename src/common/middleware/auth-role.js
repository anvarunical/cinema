import {CommonException} from "../exeptions/index.js"
import roleService from "../service/role/role.service.js"
import {sendError} from "../utils/error-sender.utils.js"

const URL_ACCESS = {
    POST: {
        "/admin" : "addAdmin",
        "/genre" : "addGenre",
        '/role' : "addRole",
        '/hall' : "addHall",
        '/upload' : "addFile",
        '/movie' : "addMovie",
        '/settings' : "addSettings"

    },
    PUT: {
        "/admin" : "updateAdmin",
        "/genre" : "updateGenre",
        '/role' : "updateRole",
        '/hall' : "updateHall",
        '/movie' : "updateMovie",
        '/settings' : "updateSettings"
    },
    DELETE: {
        "/admin" : "deleteAdmin",
        "/genre" : "deleteGenre",
        '/role' : "deleteRole",
        '/hall' : "deleteHall",
        '/movie' : "deleteMovie",
        '/settings' : "deleteSettings"

    }
}

export async function checkRole(request,response,next) {
    try {
        const {roleId,isBoss} = request.admin
        if (!isBoss) {
            const role = await roleService.findById(roleId)
            const url = request.baseUrl
            const method = request.method
            const permission = role[URL_ACCESS[method][url]]
            console.log(permission);
            if (!permission) {
                throw CommonException.NotEnoughPermission('permission denied!')
            }
        }
        next()
    } catch (error) {
        return sendError(response,error)
    }
}