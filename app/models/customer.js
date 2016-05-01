"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Customer", {
		name: {type: DataTypes.STRING},
		phone: {type: DataTypes.STRING},
		email: {type: DataTypes.STRING},
	}, {
		tableName: "customer",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Customer.hasMany(models.Instrument);
				models.Customer.hasMany(models.Order);
			}
		}
	});	
};