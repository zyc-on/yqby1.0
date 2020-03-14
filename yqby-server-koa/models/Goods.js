const Sequelize = require("sequelize");
const { NotFoundException } = require("../core/http-exception");
class Goods extends Sequelize.Model {
  static async verifyGoods(id) {
    const goods = await Goods.findByPk(id);
    if (!goods) {
      throw new NotFoundException("未找到商品，请提供正确的商品ID");
    }
    return goods;
  }

  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        images: DataTypes.STRING,
        oprice: DataTypes.INTEGER,
        price: DataTypes.INTEGER,
        rate: DataTypes.TINYINT,
        description: DataTypes.STRING
      },
      {
        sequelize,
        modelName: "goods"
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.SubCategory);
    this.belongsTo(models.User);
  }
}

module.exports = Goods;
