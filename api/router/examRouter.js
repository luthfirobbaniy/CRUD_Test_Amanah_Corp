const express = require("express");
const { Class, ExamResults, Status } = require("../models");
const router = express.Router();

// Create
router.post("/", async (req, res) => {
	const { student, classId, score } = req.body;

	try {
		await ExamResults.create({
			student,
			class_id: classId,
			score,
			status_id: score < 70 ? 0 : 1,
		});

		res.status(200).send({
			status: "Success",
			message: "Posted",
		});
	} catch (err) {
		console.log(err);
	}
});

// Read
router.get("/", async (req, res) => {
	try {
		const getData = await ExamResults.findAll({
			attributes: { exclude: ["status_id", "class_id"] },
			include: [
				{
					model: Class,
				},
				{
					model: Status,
					attributes: {
						exclude: ["id"],
					},
				},
			],
		});

		const response = getData.map((val) => {
			return {
				id: val.id,
				student: val.student,
				classId: val.class.id,
				class: val.class.name,
				score: val.score,
				status: val.status.name,
			};
		});

		res.status(200).send(response);
	} catch (err) {
		res.status(500).send({
			status: "Error",
			message: err.message,
		});
	}
});

// Update
router.put("/:id", async (req, res) => {
	const { id } = req.params;
	const { student, classId, score } = req.body;

	try {
		await ExamResults.update(
			{
				student,
				class_id: classId,
				score,
				status_id: score < 70 ? 0 : 1,
			},
			{
				where: {
					id,
				},
			}
		);

		res.status(200).send({
			message: "Updated",
		});
	} catch (err) {
		console.log(err);
	}
});

// Delete
router.delete("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		await ExamResults.destroy({
			where: {
				id,
			},
		});

		res.status(200).send({
			message: "Deleted",
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
