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

  const multer = require("multer");
  const dest = "./public/uploads/pics/";
  const storage = multer.diskStorage({
    destination: dest,
    filename: function(req, file, cb) {
      cb(null, Date.now() + file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single("file");
  app.post("/upload/goods/pic", auth(), async (req, res) => {
    upload(req, res, err => {
      if (err) {
        console.log(err);
      } else {
        const { filename } = req.file;
        const fileUrl = `http://localhost:2999/uploads/pics/${filename}`;
        res.send(fileUrl);
      }
    });
  });

  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    });
  });
};
