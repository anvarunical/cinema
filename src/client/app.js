import express  from "express";
import {ENV} from "../common/config.js";
import {connectDb} from "../common/db/connect.js";

const app = express()

async function start(){
    await connectDb()

    app.get('/', (request, response) => response.send("<h1>client api!</h1>"))

    console.log(`client server is running on http://${ENV.HOST}:${ENV.CLIENT_PORT}`)
}

app.listen(ENV.CLIENT_PORT, start)