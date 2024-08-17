const { DataTypes } = require('sequelize');
const db = require('../db/connection');

const Tag = db.define('Tag', {
    tag_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: "tags"
});

module.exports = Tag;
