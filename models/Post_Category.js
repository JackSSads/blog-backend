const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const Post = require('./Post');
const Category = require('./Category');

const PostCategory = db.define('PostCategory', {
    post_id: {
        type: DataTypes.UUID,
        references: {
            model: Post,
            key: 'post_id',
        },
        primaryKey: true,
    },
    category_id: {
        type: DataTypes.UUID,
        references: {
            model: Category,
            key: 'category_id',
        },
        primaryKey: true,
    },
}, {
    timestamps: false, // Sem createdAt e updatedAt
    tableName: 'post_categories',
});

module.exports = PostCategory;
