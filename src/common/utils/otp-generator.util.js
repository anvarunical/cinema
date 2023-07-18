export function otpGenerator(){
    return Math.random().toString().substr(2,4)
}