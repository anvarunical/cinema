import axios from "axios"
import {ENV} from "../config.js"

export async function sendOtpApi(phoneNumber,otp,hash = '') {
    try {
        await axios.get(ENV.OTP_SEND_URL.replace('{{phoneNumber}}',phoneNumber).replace('{{otp}}',otp))
    } catch (error) {
        console.log(error)
    }
}