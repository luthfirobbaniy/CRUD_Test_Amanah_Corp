const { DataTypes } = require("sequelize");
const { sequelize } = require("../db_con");

const ExamResults = sequelize.define(
	"exam_results",
	{
		student: DataTypes.STRING,
		class_id: DataTypes.INTEGER,
		score: DataTypes.INTEGER,
		status_id: DataTypes.TINYINT,
	},
	{
		timestamps: false,
	}
);

module.exports = {
	ExamResults,
};
