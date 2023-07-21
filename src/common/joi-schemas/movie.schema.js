import Joi, {required} from "joi";

export const movieSchemas = {
    createMovie : Joi.object({
        name: Joi.string()
                 .trim()
                 .min(3)
                 .max(30)
                 .required(),
        duration: Joi.string()
                     .required(),
        director: Joi.string()
                     .trim()
                     .min(3)
                     .max(30)
                     .required(),
        filmedAt: Joi.date()
                     .required(),
        actors: Joi.array()
                   .min(1)
                   .max(3)
                   .required(),
        genres: Joi.array()
                   .min(1)
                   .max(3)
                   .required(),
        country: Joi.array()
                    .min(1)
                    .max(1)
                    .required(),
        trailerUrl:Joi.string()
                      .required(),
        posterUrl:Joi.string()
                     .required(),
        pg: Joi.number()
               .required(),
        price: Joi.number()
                  .min(50000)
                  .max(100000)
                  .required(),
        dimension: Joi.string()
                  .required(),
        isPremiere: Joi.boolean()
                       .required()            
    }),
    updateMovie : Joi.object({
        _id: Joi.string().hex().length(24).required(),

        name: Joi.string()
                 .trim()
                 .min(3)
                 .max(30)
                 .required(),
        duration: Joi.string()
                     .required(),
        director: Joi.string()
                     .trim()
                     .min(3)
                     .max(30)
                     .required(),
        filmedAt: Joi.date()
                     .required(),
        actors: Joi.array()
                   .min(1)
                   .max(3)
                   .required(),
        genres: Joi.array()
                   .min(1)
                   .max(3)
                   .required(),
        country: Joi.array()
                    .min(1)
                    .max(1)
                    .required(),
        trailerUrl:Joi.string()
                      .required(),
        posterUrl:Joi.string()
                     .required(),
        pg: Joi.number()
               .required(),
        price: Joi.number()
                  .min(50000)
                  .max(100000)
                  .required(),
        dimension: Joi.string()
                  .required(),
        isPremiere: Joi.boolean()
                       .required()            
    })
}