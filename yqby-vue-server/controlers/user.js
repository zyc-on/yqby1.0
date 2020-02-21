const UserModel = require("../models/user");
let jwt = require("jsonwebtoken");
let login = async (req, res) => {
  const { account, password } = req.body;

  UserModel.find({ account }, (err, docs) => {
    if (err) throw err;
    else {
      console.log(docs);

      if (docs && docs.length > 0) {
        let userInfo = docs[0];
        userInfo.password === password
          ? () => {
            const rule = { id: userInfo._id, name: userInfo.account };
            jwt.sign(rule, "Bearer", { expiresIn: 3600 }, function (
              err,
              token
            ) {
              if (err) throw err;
              else
                res.json({
                  status: 200,
                  token: "Bearer " + token
                });
            });
          }
          : res.json({
            status: 404,
            msg: "用户名或者密码错误"
          });
      }
    }
  });

  // assert(user, 422, "用户不存在");

  // assert(user.password === password, 422, "密码错误");

  // const token = jwt.sign({ id: user._id }, app.get("secret"));

  // res.send({ "" });
};

let signup = async (req, res) => { };

module.exports = {
  login,
  signup
};
