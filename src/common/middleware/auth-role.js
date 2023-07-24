import {CommonException} from "../exeptions/index.js"
import roleService from "../service/role/role.service.js"
import {sendError} from "../utils/error-sender.utils.js"

const URL_ACCESS = {
    POST: {
        '/role': 'addRole',
        '/hall': 'addHall'
    },
    PUT: {
        '/role': 'updateRole'
    },
    DELETE: {
        '/role/:_id': 'deleteRole'
    }
}

export async function checkRole(request, response, next){
    try {
        const {roleId, isBoss} = request.admin
        if(!isBoss){
        const role = await roleService.findById(roleId)
        const url = request.originalUrl
        const method = request.method
        const permission = role[URL_ACCESS[method][url]]
        
        if(!permission){
            throw CommonException.NotEnoughPermission('permission denied!')
        }
    }
        next()
    } catch (error) {
        return sendError(response, error)
    }
}