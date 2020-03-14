module.exports = app => {
  const config = require("../yqby-vue-server/config");
  const mongoose = require("mongoose");
  mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  var db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    // we're connected!
    console.log("connect successfully");
  });
};
