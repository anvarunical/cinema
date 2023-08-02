import Joi from "joi"
export const SeansSchema = {

    createSeans: Joi.object({
        movieId: Joi.string().hex().length(24).required(),
        hallId: Joi.string().hex().length(24).required(),
        date: Joi.date().greater('now').required(),
        shift: Joi.object({
            startHour: Joi.string().required(),
            endHour: Joi.string().required(),
        })
    }) ,
    getFreeSeansShift : Joi.object({
        hallId : Joi.string().length(24).hex().required(),
        movieId : Joi.string().length(24).hex().required(),
        date : Joi.string().length(10).required()

    })
}


// [
//     {
//         vip: 15,
//         times: [
//             {
//                 fromHour: '10:00',
//                 toHour: '15:00',
//                 price: 10
//             },
//             {
//                 fromHour: '15:00',
//                 toHour: '19:00',
//                 price: 15
//             },
//             {
//                 fromHour: '19:00',
//                 toHour: '23:59',
//                 price: 25
//             }
//         ]
//     }
// ]