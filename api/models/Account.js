const { DataTypes } = require("sequelize");
const { sequelize } = require("../db_con");

const Account = sequelize.define(
	"accounts",
	{
		username: DataTypes.STRING,
		password: DataTypes.STRING,
	},
	{
		timestamps: false,
	}
);

module.exports = {
	Account,
};
