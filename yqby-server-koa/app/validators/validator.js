const { LinValidator, Rule } = require("../../core/lin-validator-v2");
const User = require("../../models/User");

class PositiveIntValidator extends LinValidator {
  constructor() {
    super();
    this.id = [new Rule("isInt", "需要是正整数", { min: 1 })];
  }
}

class IdValidator extends LinValidator {
  constructor() {
    super();
    this.id = [new Rule("isInt", "ID需要是正整数", { min: 1 })];
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super();
    this.account = [new Rule("isMobilePhone", "手机号格式错误", ["zh-CN"])];
    this.password = [
      new Rule("isLength", "密码至少6个字符，最多32个字符", {
        min: 6,
        max: 32
      }),
      new Rule(
        "matches",
        "密码强度太低",
        "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,.#%'+*-:;^_`]+$)[,.#%'+*-:;^_`0-9A-Za-z]{6,20}$"
      )
    ];
  }

  //判断account是否已存在
  async validateAccount(vals) {
    const account = vals.body.account;
    const user = await User.findOne({
      where: {
        account: account
      }
    });
    if (user) {
      throw new Error("该手机号已被注册");
    }
  }
}

class LoginValidator extends LinValidator {
  constructor() {
    super();
    this.account = [new Rule("isMobilePhone", "手机号格式错误", ["zh-CN"])];
    this.password = [
      new Rule("isLength", "密码至少6个字符，最多32个字符", {
        min: 6,
        max: 32
      }),
      new Rule(
        "matches",
        "密码强度太低",
        "^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?![,.#%'+*-:;^_`]+$)[,.#%'+*-:;^_`0-9A-Za-z]{6,20}$"
      )
    ];
  }
}
class GoodsValidator extends LinValidator {
  constructor() {
    super();
    this.name = [
      new Rule("isLength", "商品名至少6个字，最多18个字", {
        min: 2,
        max: 18
      })
    ];
    this.oprice = [new Rule("isInt", "价格必须是大于0的整数", { gt: 0 })];
    this.price = [new Rule("isInt", "价格必须是大于0的整数", { gt: 0 })];
    this.rate = [
      new Rule("isInt", "价格必须是大于0的整数", { min: 1, max: 10 })
    ];
    this.description = [
      new Rule("isLength", "商品描述最少2个字，最多50字", { min: 2, max: 50 })
    ];
    this.subcategoryId = [new Rule("isInt", "商品类别错误")];
  }
}

module.exports = {
  IdValidator,
  RegisterValidator,
  LoginValidator,
  GoodsValidator
};
