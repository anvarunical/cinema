import express  from "express";
import {ENV} from "../common/config.js";
import {connectDb} from "../common/db/connect.js";

import adminRoutes from "./routes/admin/admin.routes.js"
import signRoutes from "./routes/sign/sign.routes.js"
import genreRoutes from "./routes/genre/genre.routes.js"

const app = express()

async function start(){
    await connectDb()

    app.use(express.json())
    app.use("/admin",adminRoutes)
    app.use("/sign", signRoutes)
    app.use("/genre", genreRoutes)

    app.get('/', (request, response) => response.send("<h1>admin api!</h1>"))

    // app.use((error, req, res, next) => {
    //     if(error instanceof CommonExeption){
    //         return res.status(error.status).send(error)
    //     }
    //     return res.status(500).send(new errors.ServerError(""))
    // })
    // console.log(`admin server is running on http://${ENV.HOST}:${ENV.ADMIN_PORT}`)
}

app.listen(ENV.ADMIN_PORT, start)