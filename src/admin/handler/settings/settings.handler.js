import settingsService from "../../../common/service/settings/settings.service.js";
import {sendError} from "../../../common/utils/error-sender.utils.js";

export async function createSettingsHandler(request,response) {
    try {
        const data = request.body
        const settings = await settingsService.findAll()
        if (!settings) {
            const result = await settingsService.create(data)
            return response.json({
                message: "OK",
                data : result
            })

        } else response.json({
            message: "Settings extant you change it...",
            data : settings

        })

    } catch (error) {
        sendError(response,error)
    }
}


export async function updateSettingsHandler(request , response){
    try {
        const data = request.body
        const result = await settingsService.updateOne(data._id , data)
        return response.json({
            message : "Ok" , 
            data : result
        })
    } catch (error) {
        sendError(response , error)
    }
}