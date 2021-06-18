const { DataTypes } = require("sequelize");
const { sequelize } = require("../db_con");
const { ExamResults } = require("./ExamResults");

const Status = sequelize.define(
	"statuses",
	{
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

Status.hasMany(ExamResults, {
	foreignKey: "status_id",
});

ExamResults.belongsTo(Status, {
	foreignKey: "status_id",
});

module.exports = {
	Status,
};
