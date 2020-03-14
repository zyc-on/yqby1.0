module.exports = {
    environment: 'dev',
    db: {
        name: 'yqby',
        host: '119.3.164.176',
        port: 3306,
        user: 'root',
        password: '123456'
    },
    security: {
        secretKey: 'fsdfauhqfas',
        expiresIn: 60 * 60 * 24
    }
}