"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Instrument", {
		serial_number: {type: DataTypes.STRING},
		computer_serial_number: {type: DataTypes.STRING},
		monitor_serial_number: {type: DataTypes.STRING},
		ups_serial_number: {type: DataTypes.STRING},
		ship_date: {type: DataTypes.DATE},
		install_date: {type: DataTypes.DATE},
        warranty_date: {type: DataTypes.DATE}
	}, {
		tableName: "instrument",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Instrument.belongsTo(models.ComputerModel);
				models.Instrument.belongsTo(models.MonitorModel);
				models.Instrument.belongsToMany(models.User, {through: models.UserInstrument});
				models.Instrument.hasMany(models.SupportLog);
				models.Instrument.hasMany(models.RepairLog);
				models.Instrument.belongsTo(models.Customer);
			}
		}
	});
};
