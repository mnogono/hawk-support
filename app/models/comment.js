"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Comment", {
		comment: {type: DataTypes.TEXT}
	}, {
		tableName: "comment",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Comment.belongsTo(models.RepairLog);
				models.Comment.belongsTo(models.SupportLog);
				models.Comment.belongsTo(models.User, {as: "reporter"});
			}
		}
	});
};
