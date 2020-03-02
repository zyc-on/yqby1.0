
const Sequelize = require('sequelize')
const { name, host, port, user, password } = require('../config/config').db

const sequelize = new Sequelize(name, user, password, {
    dialect: 'mysql',
    host,
    port,
    timezone: '+08:00',
    define: {
        timestamps: true,
        paranoid: true,
        underscored: true
    }
})

sequelize.sync(
    // {
    //     force: true
    // }
)

module.exports = {
    sequelize
}
