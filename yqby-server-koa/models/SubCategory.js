const Sequelize = require("sequelize");

const { NotFoundException } = require("../core/http-exception");

class SubCategory extends Sequelize.Model {
  static async verifyCategory(id) {
    const category = await SubCategory.findByPk(id);
    if (!category) {
      throw new NotFoundException("分类未找到");
    }
    return category;
  }

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
        }
      },
      {
        sequelize,
        modelName: "subcategory"
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category);
  }
}

module.exports = SubCategory;
