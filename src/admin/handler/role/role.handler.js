import roleService from "../../../common/service/role/role.service.js"
import {sendError} from "../../../common/utils/error-sender.utils.js"


export const createRoleHandler = async (req , res) =>{
    try {
        const data = req.body
        // const result = await roleService.create(data)
        return res.json({
            message : "Ok"  ,
            // data : result
        })
    } catch (error) {
        sendError(res , error)
    }
}

export const getRoleHandler = async (req , res) => {
    try {
        const result = await roleService.findMany()
        return res.json({
            message : "ok" , 
            data : result
        })
    } catch (error) {
        sendError(res , error)
    }
}

export const updateRoleHandler = async (req , res) =>{
    try {
        const {_id} = req.body
        const data = req.body
        await roleService.findById(_id)
        const result = await roleService.updateOne(_id , data)
        return res.json({
            message : "Ok" , 
            data : result
        })
    } catch (error) {
       sendError(res , error) 
    }
}

export const deleteRoleHandler = async(req , res) => {
    try {
        const id = req.params._id
        console.log(req.params);
        await roleService.findById(id)
        const result = await roleService.deleteOne(id)
        return res.json({
            message : "Deleted" , 
            data : result
        })
    } catch (error) {
        sendError(res , error)
    }
}