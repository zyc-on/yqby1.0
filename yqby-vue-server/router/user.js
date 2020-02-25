const express = require('express')
const auth = require('../middleware/auth')
const { login, reg } = require('../controlers/user/login')

let router = express.Router({
    mergeParams: true
});

router.post('/login', login);

router.post('/reg', reg);

const multer = require("multer");
const dest = "./uploads/avatar";
const storage = multer.diskStorage({
  destination: dest,
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage }).single("file");

module.exports = router;


