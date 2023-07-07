import Dotenv from 'dotenv'
import path from 'path'
import {env} from "process"

Dotenv.config({
    path: path.join(process.cwd(), '.env')
})

export const ENV = {
    HOST: env.HOST || 'localhost',
    ADMIN_PORT: env.ADMIN_PORT || 8000,
    CLIENT_PORT: env.CLIENT_PORT || 9000,
    DB_URL: env.DB_URL || 'mongodb://localhost:2717,localhost:2718,localhost:2719/CINEMA'
}