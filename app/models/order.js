"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("Order", {
		name: {type: DataTypes.STRING},
		ship_date: {type: DataTypes.DATE},
		arrival_date: {type: DataTypes.DATE},
		
	}, {
		tableName: "order",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				models.Order.belongsTo(models.Instrument);
				models.Order.belongsTo(models.Customer);
			}
		}
	});	
};