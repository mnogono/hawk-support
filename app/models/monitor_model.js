"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("MonitorModel", {
		name: {type: DataTypes.STRING}
	}, {
		tableName: "monitor_model",
		paranoid: false,
		underscored: true,
	});
};
