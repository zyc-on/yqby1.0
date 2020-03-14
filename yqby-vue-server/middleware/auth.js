module.exports = () => {
	const jwt = require("jsonwebtoken");
	const assert = require("http-assert");
	const UserModel = require("../models/user");
	const secret = require("../config").secret;

	return async (req, res, next) => {
		const token = String(req.headers.authorization || "")
			.split(" ")
			.pop();
		assert(token, 401, "请先登录");
		try {
			const { id } = jwt.verify(token, secret);
			assert(id, 401, "请先登录");

			req.user = await UserModel.findById(id);
			assert(req.user, 401, "请先登录");
		} catch (error) {
			console.log(error);
			assert("", 401, "身份验证出现问题，请重新登录");
		}
		await next();
	};
};
