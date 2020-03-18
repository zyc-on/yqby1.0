const Sequelize = require("sequelize");
const Category = require("./Category")
const User = require("./User")
const SubCategory = require("./SubCategory")
const Op = Sequelize.Op
const {NotFoundException} = require("../core/http-exception");

class Goods extends Sequelize.Model {
  static async verifyGoods(id) {
    const goods = await Goods.findByPk(id);
    if (!goods) {
      throw new NotFoundException("未找到商品，请提供正确的商品ID");
    }
    return goods;
  }
  
  static async getLatestGoods(page = 1) {
    return Goods.findAll({
      offset: (page - 1) * 8,
      limit: 8,
      attributes: {exclude: ["deletedAt"]},
      include: [
        {model: User, attributes: ["id", "username"]},
        {model: SubCategory, attributes: ["id", "name"]},
        {model: Category, attributes: ["id", "name"]}
      ],
      order: [
        ["updatedAt", "DESC"]
      ]
    });
  }
  
  static async findGoodsByKeyword(key, page = 1, order, by) {
    order = order === "ASC" ? order : "DESC"
    by = by === "price" ? by : "updatedAt"
    return Goods.findAll({
      offset: (page - 1) * 8,
      limit: 8,
      where: {
        name: {
          [Op.like]: '%' + key + '%'
        }
      },
      attributes: {exclude: ["deletedAt"]},
      include: [
        {model: User, attributes: ["id", "username"]},
        {model: SubCategory, attributes: ["id", "name"]},
        {model: Category, attributes: ["id", "name"]}
      ],
      order: [
        [by, order]
      ]
      
    });
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
    this.belongsTo(models.Category)
    this.belongsTo(models.SubCategory);
    this.belongsTo(models.User);
  }
}

module.exports = Goods;
