const express = require("express");
const config = require("./config");
const auth = require("./middleware/auth");

const app = express();

app.use(require("cors")());
app.use(express.json());
app.use(express.static("public"));

require("./db")(app);

app.listen(config.port, () => {
	console.log(`http://localhost:${config.port}`);
});

app.use("/user", require("./router/user"));
app.use("/goods", require("./router/goods"));

app.use(async (err, req, res, next) => {
	res.status(err.statusCode || 500).send({
		message: err.message
	});
});
