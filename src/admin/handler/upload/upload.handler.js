import path from "path"
import {sendError} from "../../../common/utils/error-sender.utils.js"


export const imageUpload = async (request,response) => {
    try {
        const {image} = request.files
        const fileName = image.md5 + path.extname(image.name)
        const filePath = path.join(process.cwd(),"uploads",fileName)
        image.mv(filePath)
        return response.json({
            message : "Ok" , 
            data : fileName
        })
    } catch (error) {
        sendError(response,error)
    }
}

export async function trailerUpload( request , response){
    try {
        const {trailer} = request.files
        const fileName = trailer.md5 + path.extname(trailer.name)
        const filePath = path.join( process.cwd() , 'uploads' , fileName)
        trailer.mv(filePath)
        return response.json({
            message : "Ok" , 
            date : fileName
        })
    } catch (error) {
        sendError(response , error)
    }
}