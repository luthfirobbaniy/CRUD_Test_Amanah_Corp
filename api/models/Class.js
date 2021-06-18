const { DataTypes } = require("sequelize");
const { sequelize } = require("../db_con");
const { ExamResults } = require("./ExamResults");

const Class = sequelize.define(
	"classes",
	{
		name: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

Class.hasMany(ExamResults, {
	foreignKey: "class_id",
});

ExamResults.belongsTo(Class, {
	foreignKey: "class_id",
});

module.exports = {
	Class,
};
