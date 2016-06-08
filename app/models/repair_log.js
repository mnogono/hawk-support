"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("RepairLog", {
		name: {type: DataTypes.STRING},
		comment: {type: DataTypes.TEXT},
		status: {type: DataTypes.ENUM("open", "close", "on hold", "in progress"), defaultValue: "open"}
	}, {
		tableName: "repair_log",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.RepairLog.belongsTo(models.User, {as: "reporter"});
				models.RepairLog.belongsTo(models.User, {as: "assignee"});
				models.RepairLog.belongsTo(models.Instrument);
				models.RepairLog.belongsTo(models.Customer);
			}
		}
	});
};
