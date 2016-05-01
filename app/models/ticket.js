"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Ticket", {
		name: {type: DataTypes.STRING},
		comment: {type: DataTypes.TEXT}
	}, {
		tableName: "ticket",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Ticket.hasOne(models.User);
				models.Ticket.hasOne(models.Instrument);
				models.Ticket.hasOne(models.Customer);
			}
		}
	});	
};