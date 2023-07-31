import express from "express";
import {ENV} from "../common/config.js";
import {connectDb} from "../common/db/connect.js";
import fileUpload from "express-fileupload";

import adminRoutes from "./routes/admin/admin.routes.js"
import signRoutes from "./routes/sign/sign.routes.js"
import genreRoutes from "./routes/genre/genre.routes.js"
import roleRoutes from "./routes/role/role.routes.js"
import hallRoutes from "./routes/hall/hall.routes.js"
import uploadRoutes from "./routes/upload/upload.routes.js"
import movieRoutes from "./routes/movie/movie.routes.js"
import {CommonException} from "../common/exeptions/index.js";
import settingsRoutes from "./routes/settings/settings.routes.js"
import seatRoutes from './routes/seats/seats.routes.js'

const app = express()

async function start() {
    await connectDb()
    app.use(fileUpload())
    app.use(express.json())
    app.use("/admin",adminRoutes)
    app.use("/sign",signRoutes)
    app.use("/genre",genreRoutes)
    app.use('/role',roleRoutes)
    app.use('/hall',hallRoutes)
    app.use('/upload',uploadRoutes)
    app.use('/movie' , movieRoutes)
    app.use('/settings' , settingsRoutes)
    app.use('/seats' , seatRoutes)

    app.get('/',(request,response) => response.send("<h1>admin api!</h1>"))

    // errorHandler
    app.use((error, request, response, next) => {
        console.log(22, error)
        if (error instanceof CommonException) response.send(error)
        else response.send(CommonException.UnknownError(error))
    })
    console.log(`admin server is running on http://${ENV.HOST}:${ENV.ADMIN_PORT}`)
}

app.listen(ENV.ADMIN_PORT,start)