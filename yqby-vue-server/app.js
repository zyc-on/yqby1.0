const express = require("express");
const config = require("./config");
const auth = require("./middleware/auth");

const app = express();

app.use(require("cors")());
app.use(express.json());
app.use(express.static("public"));
require("./db")(app);
require("./routes/routes")(app);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
<<<<<<< Updated upstream
=======

app.use("/user", auth(), require("./router/user"));
app.use("/goods", auth(), require("./router/goods"));

app.use(async (err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    message: err.message
  });
});
>>>>>>> Stashed changes
