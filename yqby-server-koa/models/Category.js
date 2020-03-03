const { Sequelize, Model } = require('sequelize')
const { sequelize } = require('../core/db')

class Category extends Model {
}


Category.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true
    },
}, {
    sequelize,
    modelName: 'category'
})

class SubCategory extends Model {

}

SubCategory.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: Sequelize.STRING,
        unique: true
    }
}, {
    sequelize,
    modelName: 'subCategory'
})

Category.hasMany(SubCategory)

module.exports = { Category, SubCategory }

