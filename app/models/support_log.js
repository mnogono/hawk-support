"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("SupportLog", {
		name: {type: DataTypes.STRING},
		comment: {type: DataTypes.TEXT},
        status: {type: DataTypes.ENUM("open", "close", "on hold", "in progress"), defaultValue: "open"}
	}, {
		tableName: "support_log",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.SupportLog.belongsTo(models.User, {as: "reporter"});
				models.SupportLog.belongsTo(models.User, {as: "assignee"});
				models.SupportLog.belongsTo(models.Instrument);
				models.SupportLog.belongsTo(models.Customer);
                models.SupportLog.hasMany(models.SupportLogComment);
			}
		}
	});
};
