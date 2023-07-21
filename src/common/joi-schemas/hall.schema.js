import Joi from "joi";

export const hallSchemas = {
    createHall: Joi.object({
        number: Joi.number()
                   .min(1)
                   .max(50)
                   .required(),
        raws:   Joi.number() 
                   .min(1)
                   .max(20)
                   .required(),
        seats: Joi.number()            
                  .min(5)
                  .max(20)
                  .required(),
        isVip: Joi.boolean()
                  .required()
    }),
    updateHall: Joi.object({
        _id: Joi.string().hex().length(24).required(),

        number: Joi.number()
                   .min(1)
                   .max(50)
                   .required(),
        raws:   Joi.number() 
                   .min(1)
                   .max(20)
                   .required(),
        seats: Joi.number()            
                  .min(5)
                  .max(20)
                  .required(),
        isVip: Joi.boolean()
                  .required()
    }) 
}