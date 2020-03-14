const jwt = require('jsonwebtoken')

const secreteKey = require('../config/config').security.secretKey
const { Forbbiden } = require('../core/http-exception')


class Auth {

    //level表示当前认证接口的权限等级，默认为1,普通登录用户的默认权限级别为8

    constructor(level) {
        this.level = level || 1
        Auth.USER = 8
        Auth.ADMIN = 16
    }

    get m() {
        return async (ctx, next) => {
            const token = (ctx.header.authorization || "").split(" ").pop();
            let decode
            if (!token) {
                throw new Forbbiden('token为空，不合法')
            }
            try {

                decode = jwt.verify(token, secreteKey)

            } catch (error) {
                if (error.name == 'TokenExpiredError') {
                    throw new Forbbiden('token已过期')
                }
                throw new Forbbiden('token不合法')
            }

            if (decode.scope < this.level) {
                throw new Forbbiden('权限不足')
            }

            ctx.auth = {
                id: decode.id,
                scope: decode.scope
            }
            await next()
        }
    }
}

module.exports = Auth