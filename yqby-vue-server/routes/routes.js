module.exports = app => {
  const express = require("express");
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const { login, signup } = require("../controlers/user/login");

  const router = express.Router({
    mergeParams: true
  });

  const auth = require("../middleware/auth");


  app.post("/login", login);

  app.post("/signup", signup);

  // app.get('/user/info')
  // app.put('/user/info')

  // app.get("/user", getUserInfo);

  // app.post("goods/info", auth(), async (req, res) => {});

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
