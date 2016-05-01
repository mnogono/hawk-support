"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("User", {
		name: {type: DataTypes.STRING},
		phone: {type: DataTypes.STRING},
		email: {type: DataTypes.STRING},
		type: {type: DataTypes.ENUM("admin","engineer","manager")},
		login: {type: DataTypes.STRING},
		password: {type: DataTypes.STRING}
	}, {
		tableName: "user",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				//models.User.belongsToMany(models.Instrument);
			}
		}
	});	
};