import Joi from "joi"

export const validateIt = (schema, property) => {
    return (req, res, next) => {
        const {error} = schema.validate(req[property], {abortEarly: false})
        const valid = error == null
        if(valid) next() 
        else {
            const {details} = error
            const message = details.map(detail => detail.message).join(',')
            res.status(400).json({
                error: message
            })
        }
    }
}