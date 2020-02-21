const mongoose = require("mongoose");
// define a schema to operate the userSchema
const userSchema = new mongoose.Schema({
  account: { type: String },
  password: { type: String }
});
// 定义模型models 来操作数据库

// var UserModel = mongoose.model("User", userSchema);
module.exports = mongoose.model('User',userSchema);
//通过模型来增删改查
//1. 查询
// UserModel.find({}, function(err, doc) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(doc);
// });
// 增加数据：通过实例化模型来增加
// var u = new UserModel({
//   account: "112",
//   password: "112"
// });
// u.save(err => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("添加数据成功");
// });

// 数据的更新


