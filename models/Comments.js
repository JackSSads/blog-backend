const { DataTypes } = require('sequelize');
const db = require('../db/connection');
const Post = require('./Post');
const User = require('./User');

const Comment = db.define('Comment', {
    comment_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'comments',
});

// Relacionamentos
Comment.belongsTo(Post, { foreignKey: 'post_id' });
Post.hasMany(Comment, { foreignKey: 'post_id' });

Comment.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Comment, { foreignKey: 'user_id' });

module.exports = Comment;
