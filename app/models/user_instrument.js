"use strict";

module.exports = function(sequelize, DataTypes) {
	return sequelize.define("UserInstrument", {
		role: {type: DataTypes.ENUM("admin","engineer","manager")}
	}, {
		tableName: "user_instrument",
		paranoid: false,
		underscored: true,
		classMethods: {
			associate: function(models) {
				//models.User.belongsToMany(models.Instrument);
			}
		}
	});	
};