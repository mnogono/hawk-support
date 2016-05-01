"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Instrument", {
		serial_number: {type: DataTypes.STRING},
		computer_serial_number: {type: DataTypes.STRING},
		monitor_serial_number: {type: DataTypes.STRING},
		ups_serial_number: {type: DataTypes.STRING}
	}, {
		tableName: "instrument",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Instrument.belongsTo(models.ComputerModel);
				models.Instrument.belongsTo(models.MonitorModel);
				//models.Instrument.hasMany(models.User);
			}
		}
	});	
};