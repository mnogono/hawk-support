"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("ComputerModel", {
		name: {type: DataTypes.STRING}
	}, {
		tableName: "computer_model",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.ComputerModel.hasMany(models.Instrument);
			}
		}
	});	
};