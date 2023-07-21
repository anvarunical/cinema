import Joi from "joi";

export const roleSchema = {
    createRole: Joi.object({
        name: Joi.string()
                 .trim()
                 .min(3)
                 .max(30)
                 .required(),

        //admin
        addAdmin: Joi.boolean()
                     .required(),

        updateAdmin: Joi.boolean()
                        .required(),

        deleteAdmin: Joi.boolean()
                        .required(),
             
        //genres
        addGenres: Joi.boolean()
                     .required(),

        updateGenres: Joi.boolean()
                        .required(),

        deleteGenres: Joi.boolean()
                        .required(),
        //halls
        addHalls: Joi.boolean()
                     .required(),

        updateHalls: Joi.boolean()
                        .required(),

        deleteHalls: Joi.boolean()
                        .required(),
        //movie
        addMovies: Joi.boolean()
                      .required(),

        updateMovies: Joi.boolean()
                         .required(),

        deleteMovies: Joi.boolean()
                         .required(),
        //otp
        addOtp: Joi.boolean()
                   .required(),

        updateOtp: Joi.boolean()
                      .required(),

        deleteOtp: Joi.boolean()
                      .required(),
        //roles
        addRoles: Joi.boolean()
                     .required(),

        updateRoles: Joi.boolean()
                        .required(),

        deleteRoles: Joi.boolean()
                        .required(),
        //seans
        addSeans: Joi.boolean()
                     .required(),

        updateSeans: Joi.boolean()
                        .required(),

        deleteSeans: Joi.boolean()
                        .required(),
        //seats
        addSeats: Joi.boolean()
                     .required(),

        updateSeats: Joi.boolean()
                        .required(),

        deleteSeats: Joi.boolean()
                        .required(),
        //settings
        addSettings: Joi.boolean()
                     .required(),

        updateSettings: Joi.boolean()
                        .required(),

        deleteSettings: Joi.boolean()
                        .required(),

                    })
}