import Joi from "joi";

export const genresSchema = {
    createGenre : Joi.object({
        name:Joi.string()
                .min(3)
                .max(30)
                .trim()
                .required()
    }),
    updateGenre : Joi.object({
        _id: Joi.string().hex().length(24).required(),

        name:Joi.string()
                .min(3)
                .max(30)
                .trim()
                .required()
    })
}