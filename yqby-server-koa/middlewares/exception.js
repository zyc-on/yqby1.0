const { HttpException, ParamException } = require('../core/http-exception')
const { environment } = require('../config/config')


const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        const isHttpException = error instanceof HttpException
        const isDev = environment === 'dev'

        if (isDev && !isHttpException) {
            throw error
        }

        if (isHttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                requestUrl: `${ctx.method}  ${ctx.path}`
            }
            ctx.status = error.statusCode
        } else {
            ctx.body = {
                msg: 'Sorry,an error occurs on the web serverヽ(。_°)ノ',
                errorCode: 999,
                requestUrl: `${ctx.method}  ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError