
const express = require('express')
const auth = require('../middleware/auth')

let router = express.Router({
  mergeParams: true
})


const multer = require('multer');
const dest =  './public/goods';
const storage = multer.diskStorage({
  destination: dest,
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
const upload = multer({ storage: storage }).single('file');
router.post('/add/pics', auth(), async (req, res) => {
  upload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      const {filename} = req.file;
      console.log(req.file);
      
      const fileUrl = `http://localhost:2999/goods/${filename}`;
      console.log(fileUrl);
      
        res.send(fileUrl);
    }
  })
})

module.exports = router;