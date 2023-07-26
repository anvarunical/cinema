import path from "path"
import {sendError} from "../../../common/utils/error-sender.utils.js"


export const fileUpload = async (request,response) => {
    try {
        const {file} = request.files
        const fileName = file.md5 + path.extname(file.name)
        const filePath = path.join(process.cwd(),"uploads",fileName)
        file.mv(filePath)
        return response.json({
            message : "Ok" , 
            data : fileName
        })
    } catch (error) {
        sendError(response,error)
    }
}

// export async function trailerUpload( request , response){
//     try {
//         const {trailer} = request.files
//         const fileName = trailer.md5 + path.extname(trailer.name)
//         const filePath = path.join( process.cwd() , 'uploads' , fileName)
//         trailer.mv(filePath)
//         return response.json({
//             message : "Ok" , 
//             date : fileName
//         })
//     } catch (error) {
//         sendError(response , error)
//     }
// }