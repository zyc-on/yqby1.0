
module.exports = () => {

    const UserModel = require("../models/User");
    const jwt = require("jsonwebtoken");
    const assert = require("http-assert")
    const secret = require('../config').secret
    return async (req, res) => {

        const { account, password } = req.body;
        const user = await UserModel.findOne({ account })

        assert(user, 422, '用户不存在')

        assert(password === user.password, 422, '密码错误')

        const token = jwt.sign({ id: user._id }, secret, { expiresIn: 3600 })

        res.send({ token })

    };
}



