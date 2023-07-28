export const SeansSchema = {
    createSeans: Joi.Object({
        movieId: Joi.string().hex().length(24).required(),
        hallId: Joi.string().hex().length(24).required(),
        date: Joi.date().greater('now').required(),
        shift: Joi.Object({
            startHour: Joi.string().required(),
            endHour: Joi.string().required(),
        }),
        price: Joi.number().required(),
    }) 
}


[
    {
        vip: 15,
        times: [
            {
                fromHour: '10:00',
                toHour: '15:00',
                price: 10
            },
            {
                fromHour: '15:00',
                toHour: '19:00',
                price: 15
            },
            {
                fromHour: '19:00',
                toHour: '23:59',
                price: 25
            }
        ]
    }
]