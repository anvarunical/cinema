import Joi from "joi";

export const adminSchemas = {
    login: Joi.object({
        phoneNumber: Joi.string()
                        .pattern(/^(\+998|8\-9|998)?\s?(\d{2})?\-?\d{3}\-?\d{2}\-?\d{2}$/)
                        .required(),

        password: Joi.string()
                     .trim()
                     .min(6)
                     .max(30)
                     .required()
    }),
    createAdmin: Joi.object({
        firstName: Joi.string()
                        .trim()
                        .min(3)
                        .max(30)
                        .required(),

        lastName: Joi.string()
                      .trim()
                      .min(3)
                      .max(30)
                      .required(),

        phoneNumber: Joi.string()
                        .pattern(/^(\+998|8\-9|998)?\s?(\d{2})?\-?\d{3}\-?\d{2}\-?\d{2}$/)
                        .required(),
        password: Joi.string()
                     .trim()
                     .min(6)
                     .max(30)
                     .required(),
        // roleId: ,
    })
}

// OTP => one time password