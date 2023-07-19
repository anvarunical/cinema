export function sendError(response, error){
    return response.json({
        error: error.message
    })
}