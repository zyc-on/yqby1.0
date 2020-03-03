const jwt = require('jsonwebtoken')
const security = require('../../config/config').security

const generateToken = (id, scope) => {

    const secretKey = security.secretKey
    const expiresIn = security.expiresIn

    const token = jwt.sign({
        id,
        scope
    }, secretKey, { expiresIn })

    return token
}

module.exports = {
    generateToken
}