const express = require("express");
const { Class } = require("../models/Class");
const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const response = await Class.findAll();

		res.status(200).send(response);
	} catch (err) {
		res.status(500).send({
			status: "Error",
			message: err.message,
		});
	}
});

module.exports = router;
