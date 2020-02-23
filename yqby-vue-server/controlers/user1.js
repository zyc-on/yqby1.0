const UserModel = require("../models/user");
const jwt = require("jsonwebtoken");
const assert = require("http-assert");
const secret = require("../config").secret;

const login = async (req, res) => {
  const { account, password } = req.body;
  const user = await UserModel.findOne({ account });
  console.log(user);

  assert(user, 422, "用户不存在");

  assert(password === user.password, 422, "密码错误");

  const token = jwt.sign({ id: user._id }, secret, { expiresIn: 3600 });
  UserModel.update({ account }, { $set: { token } }, err => {
    if (err) {
      console.log(err);
    } else {
      console.log("修改成功");
    }
  });
  res.status(299).send({ token });
};

let signup = async (req, res) => {
  const { account, password } = req.body;
  let user = await UserModel.findOne({ account });

  console.log(user);

  assert(!user, 422, "该账号已注册");

  user = await UserModel.create({ ...req.body, token: "" });
  res.status(299).send({
    account: user.account,
    message: "注册成功,请登录"
  });

  // //to-do数据校验
  // user = await UserModel.create(req.body)
  // res.join({
  //     status:'OK',
  //     accoutn: user.account
  // })
};

module.exports = {
  login,
  signup
};
