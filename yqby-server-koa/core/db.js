
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
const User = require('../models/User')
const Category = require('../models/Category')
const SubCategory = require('../models/SubCategory')
const Goods = require('../models/Goods')


const models = {
    User: User.init(sequelize, Sequelize),
    Category: Category.init(sequelize, Sequelize),
    SubCategory: SubCategory.init(sequelize, Sequelize),
    Goods: Goods.init(sequelize, Sequelize)
}

Object.values(models)
    .filter(model => typeof model.associate === "function")
    .forEach(model => model.associate(models))

sequelize.sync({
    // force: true
})

module.exports = {
    ...models,
    sequelize
}
