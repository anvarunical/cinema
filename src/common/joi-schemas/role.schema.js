import Joi from "joi";

export const roleSchema = {
    createRole: Joi.object({
        name: Joi.string()
            .trim()
            .min(3)
            .max(30)
            .required(),

        addAdmin: Joi.boolean(),
        updateAdmin: Joi.boolean(),
        deleteAdmin: Joi.boolean(),
        addGenre: Joi.boolean(),
        updateGenre: Joi.boolean(),
        deleteGenre: Joi.boolean(),
        addHall: Joi.boolean(),
        updateHall: Joi.boolean(),
        deleteHall: Joi.boolean(),
        addMovie: Joi.boolean(),
        updateMovie: Joi.boolean(),
        deleteMovie: Joi.boolean(),
        addRole: Joi.boolean(),
        updateRole: Joi.boolean(),
        deleteRole: Joi.boolean(),
        addSeans: Joi.boolean(),
        updateSeans: Joi.boolean(),
        deleteSeans: Joi.boolean(),
        addSeat: Joi.boolean(),
        updateSeat: Joi.boolean(),
        deleteSeat: Joi.boolean(),
        addSettings: Joi.boolean(),
        updateSettings: Joi.boolean(),
        deleteSettings: Joi.boolean(),
    }) ,
    updateRole : Joi.object({
        id : Joi.string().hex().length(24).required(),
        addAdmin: Joi.boolean(),
        updateAdmin: Joi.boolean(),
        deleteAdmin: Joi.boolean(),
        addGenre: Joi.boolean(),
        updateGenre: Joi.boolean(),
        deleteGenre: Joi.boolean(),
        addHall: Joi.boolean(),
        updateHall: Joi.boolean(),
        deleteHall: Joi.boolean(),
        addMovie: Joi.boolean(),
        updateMovie: Joi.boolean(),
        deleteMovie: Joi.boolean(),
        addRole: Joi.boolean(),
        updateRole: Joi.boolean(),
        deleteRole: Joi.boolean(),
        addSeans: Joi.boolean(),
        updateSeans: Joi.boolean(),
        deleteSeans: Joi.boolean(),
        addSeat: Joi.boolean(),
        updateSeat: Joi.boolean(),
        deleteSeat: Joi.boolean(),
        addSettings: Joi.boolean(),
        updateSettings: Joi.boolean(),
        deleteSettings: Joi.boolean(),
    }) 

}