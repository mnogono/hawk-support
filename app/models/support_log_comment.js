"use strict";

module.exports = function(sequelize, DataTypes) {
    return sequelize.define("SupportLogComment", {
        comment: {type: DataTypes.TEXT}
    }, {
        tableName: "support_log_comment",
        paranoid: false,
        underscored: true,
        classMethods: {
            associate: function(models) {
                models.SupportLogComment.belongsTo(models.User, {as: "author"});
                models.SupportLogComment.belongsTo(models.SupportLog);
            }
        }
    });
};
