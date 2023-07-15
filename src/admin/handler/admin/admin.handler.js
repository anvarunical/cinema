import md5 from "md5";
import adminService from "../../../common/servers/admin/admin.service.js";

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