const { examRouter, classRouter, authRouter } = require("./router");

const express = require("express");
const cors = require("cors");

const app = express();
const bodyParser = express.json();

const PORT = 2000;

app.use(bodyParser);
app.use(cors());

app.use("/exam", examRouter);
app.use("/class", classRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
	res.send("<h1>CRUD TEST API<h1>");
});

app.listen(PORT, () => {
	console.log("API ACTIVE");
});
