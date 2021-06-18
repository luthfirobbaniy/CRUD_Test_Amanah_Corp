const express = require("express");
const { Account } = require("../models");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
	const { username, password } = req.body;

	try {
		const response = await Account.findOne({
			attributes: ["username"],
			where: {
				username,
				password,
			},
		});

		if (!response) {
			return res.status(200).send({
				status: "Not Found",
				message: "User Not Found",
			});
		}

		res.status(200).send(response);
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
