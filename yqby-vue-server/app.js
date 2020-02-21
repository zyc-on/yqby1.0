const express = require("express");
const config = require("./config");

const app = express();
app.use(require("cors")());
app.use(express.json());
app.use("/uploads", express.static(__dirname+'/uploads'));

require("./db")(app);
require("./routes/routes")(app);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
