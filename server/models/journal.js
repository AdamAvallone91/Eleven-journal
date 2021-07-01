const { DataTypes } = require("sequelize");
const db = require("../db");

const journal = db.define("journal", {
title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
},
entry: {
    type: DataTypes.STRING,
    allowNull: false
},
owner: {
    type: DataTypes.INTEGER
}
});

module.exports = journal;