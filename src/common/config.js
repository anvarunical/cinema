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
    DB_URL: env.DB_URL || 'mongodb://localhost:2717,localhost:2718,localhost:2719/CINEMA',
    TOKEN_SECRET_KEY: env.TOKEN_SECRET_KEY || "SECRET_KEY",
    BOT_TOKEN: env.BOT_TOKEN || '6359454176:AAH5vOG31gZTOplQWqbK9GnwnMiA9pOjSy0',
    OTP_CHANNEL: env.OTP_CHANNEL || -1001859198912,
    OTP_SEND_URL: env.OTP_SEND_URL || 'https://api.telegram.org/bot6359454176:AAH5vOG31gZTOplQWqbK9GnwnMiA9pOjSy0/sendMessage?chat_id=-1001859198912&parse_mode=html&text={{otp}} -> {{phoneNumber}}'
}

// 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