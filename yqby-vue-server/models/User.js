const mongoose = require("mongoose");
// define a schema to operate the userSchema
const userSchema = new mongoose.Schema({
  account: { type: String },
  password: { type: String },
  username: { type: String },
  newcome: { type: Boolean },
  sex: { type: Boolean },
  avatar: { type: String },
  school: { type: String },
  location: { type: String },
  motto: { type: String }
});

module.exports = mongoose.model("User", userSchema);
