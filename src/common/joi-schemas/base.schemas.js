import Joi from "joi";

export const baseSchemas = {
    byId: Joi.object({
        _id: Joi.string().hex().length(24).required()
    })
}