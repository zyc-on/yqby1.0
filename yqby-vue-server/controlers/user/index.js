const UserModel = require("../../models/user");

const getUser = async (req, res) => {
  res.status(299).send(req.user);
};

module.exports = {
  getUser
};
