// models/PostTag.js
const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const Post = require('./Post');
const Tag = require('./Tag');

const PostTag = db.define('PostTag', {
    post_id: {
        type: DataTypes.UUID,
        references: {
            model: Post,
            key: 'post_id',
        },
        primaryKey: true,
    },
    tag_id: {
        type: DataTypes.UUID,
        references: {
            model: Tag,
            key: 'tag_id',
        },
        primaryKey: true,
    },
}, {
    timestamps: false,
    tableName: 'post_tags',
});

module.exports = PostTag;
