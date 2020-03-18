const Sequelize = require('sequelize')


class Category extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: DataTypes.STRING,
                    unique: true
                },
            },
            {
                sequelize,
                modelName: 'category'
            }
        )
    }

    static associate(models) {
        this.hasMany(models.SubCategory)
    }

}

module.exports = Category


