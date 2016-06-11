"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Instrument", {
		serial_number: {type: DataTypes.STRING},
		computer_serial_number: {type: DataTypes.STRING},
		monitor_serial_number: {type: DataTypes.STRING},
		ups_serial_number: {type: DataTypes.STRING},
        printer_serial_number: {type: DataTypes.STRING},
        ir_co: {type: DataTypes.STRING},
        ir_co2: {type: DataTypes.STRING},
        leak_detector: {type: DataTypes.STRING},
        flow_meter: {type: DataTypes.STRING},
        air_system: {type: DataTypes.STRING},
        balance: {type: DataTypes.STRING},
        note: {type: DataTypes.TEXT},
		ship_date: {type: DataTypes.DATE, defaultValue: "1970-01-01 00:00:00"},
		install_date: {type: DataTypes.DATE, defaultValue: "1970-01-01 00:00:00"},
        warranty_end_date: {type: DataTypes.DATE, defaultValue: "1970-01-01 00:00:00"}
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
