const Sequelize = require('sequelize')


class SubCategory extends Sequelize.Model {
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
                modelName: 'subcategory'
            }
        )
    }

    static associate(models) {
        this.belongsTo(models.Category)
    }
}





module.exports = SubCategory