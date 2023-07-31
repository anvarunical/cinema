import Joi from "joi";
const objects = Joi.object({
    fromHour: Joi.string().length(5).required(),
    toHour: Joi.string().length(5).required(),
    price: Joi.number().min(0).max(30).required()
})

export const SettingsSchema = {
    create: Joi.object({
        vip: Joi.number().required(),
        times: Joi.array().items(objects).required()
    }),
    update :Joi.object({
        _id : Joi.string().length(24).hex().required() ,
        vip:Joi.number() , 
        times : Joi.array().items(objects)
    })
}