import {CommonErrorCodes, HttpErrorCodes} from "./error-code.js"

export class CommonException {
    constructor(code,message,data, statusCode, time = new Date()) {
        this.code = code
        this.message = message
        this.data = data
        this.statusCode = statusCode
        this.time = time
    }

    static Success(data) {
        return new CommonException(CommonErrorCodes.Success,'Success',data,HttpErrorCodes.Success)
    }

    static Unauthorized(data = {}) {
        return new CommonException(CommonErrorCodes.Unauthorized,'Unauthorized',data,HttpErrorCodes.Unauthorized)
    }

    static Unknown(data = {}) {
        return new CommonException(CommonErrorCodes.Unknown,'UnknownError',data,HttpErrorCodes.ServerError)
    }

    static NotFound(data = {}) {
        return new CommonException(CommonErrorCodes.NotFound,'NotFound',data,HttpErrorCodes.NotFound)
    }

    static BadRequest(data = {}) {
        return new CommonException(CommonErrorCodes.Unknown,'UnknownError',data,HttpErrorCodes.ServerError)
    }

    static AllreadyExist(data) {
        return new CommonException(CommonErrorCodes.AllreadyExist,'AllreadyExist',data,HttpErrorCodes.ServerError)
    }

    static Validation(data) {
        return new CommonException(CommonErrorCodes.Validation,'Validation error',data,HttpErrorCodes.BadRequest)
    }

    static DbValidation(data) {
        return new CommonException(CommonErrorCodes.DbValidation,'Db Validation error',data,HttpErrorCodes.ServerError)
    }

    static NotEnoughPermission(data = {}) {
        return new CommonException(CommonErrorCodes.NotPermission,'NotEnoughPermission',data,HttpErrorCodes.Forbidden)
    }
    static IncorrentOtp(data) {
        return new CommonException(CommonErrorCodes.IncorrectOtp,'IncorrectOtp',data,HttpErrorCodes.Forbidden)
    }
    static TooManyAttemps(data) {
        return new CommonException(CommonErrorCodes.TooManyAttemps,'TooManyAttemps',data,HttpErrorCodes.TooMany)
    }
    static ExpiredOtp(data) {
        return new CommonException(CommonErrorCodes.ExpiredOtp,'ExpiredOtp',data,HttpErrorCodes.Forbidden)
    }
    static IncorrectPassword(data) {
        return new CommonException(CommonErrorCodes.IncorrectPassword,'IncorrectPassword',data,HttpErrorCodes.Forbidden)
    }
}