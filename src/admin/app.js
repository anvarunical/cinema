import express  from "express";
import {ENV} from "../common/config.js";
import {connectDb} from "../common/db/connect.js";

const app = express()

async function start(){
    await connectDb()

    app.get('/', (request, response) => response.send("<h1>admin api!</h1>"))
    console.log(`admin server is running on http://${ENV.HOST}:${ENV.ADMIN_PORT}`)
}

app.listen(ENV.ADMIN_PORT, start)