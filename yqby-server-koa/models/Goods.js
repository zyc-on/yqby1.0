const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../core/db')

const { SubCategory } = require('./Category')
const User = require('./User')


class Goods extends Model {

}

Goods.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    images: Sequelize.STRING,
    oprice: Sequelize.INTEGER,
    price: Sequelize.INTEGER,
    rate: Sequelize.TINYINT,
    description: Sequelize.STRING,
}, {
    sequelize,
    modelName: 'goods'
})

Goods.belongsTo(User)
Goods.belongsTo(SubCategory)

