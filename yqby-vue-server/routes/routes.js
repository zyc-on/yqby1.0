module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const { login, signup, getUserInfo } = require("../controlers/user1");

  const router = express.Router({
    mergeParams: true
  });

  const auth = require("../middleware/auth");

  /**
   * 登录
   * @api {POST} /login
   * @apiDescription 通过账户和密码登录
   * @apiName login
   * @apiParam
   * @apiSampleRequest /api/users/5a45cefd080d7c39a036ca55
   * @apiGroup User
   * @apiVersion 1.0.0
   */
  app.post("/login", login);

  /**
   * 登录
   * @api {POST} /login
   * @apiDescription 通过账户和密码登录
   * @apiName login
   * @apiParam {Object} [address]         Optional nested address object.
   * @apiParam {String} [address[street]] Optional street and number.
   * @apiParam {String} [address[zip]]    Optional zip code.
   * @apiParam {String} [address[city]]   Optional city.
   * @apiSampleRequest /api/users/5a45cefd080d7c39a036ca55
   * @apiGroup User
   * @apiVersion 1.0.0
   */

  app.post("/signup", signup);

  app.get("/user", getUserInfo);

  app.post("goods/info", auth(), async (req, res) => {});

  const multer = require("multer");
  const upload = multer({ dest: __dirname + "/../uploads/pics" });
  app.post(
    "/upload/goods/pic",
    auth(),
    upload.single("file"),
    async (req, res) => {
      const { filename } = req.file;
      const fileUrl = `http://localhost:2999/uploads/pics/${filename}`;
      res.send(fileUrl);
    }
  );

  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
