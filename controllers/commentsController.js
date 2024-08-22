const Comments = require("../models/Comments");
const Post = require("../models/Post");
const User = require("../models/User");

module.exports = class CommentsController {

    static async create(req, res) {
        const { content, post_id, user_id } = req.body;

        const data = {
            content,
            post_id,
            user_id,
        };

        try {
            const check_if_post_exists = await Post.findOne({ where: { post_id: post_id } });

            if (!check_if_post_exists) {
                return res.status(404).json({
                    status: 404,
                    message: "Post not found",
                });
            };

            const check_if_user_exists = await User.findOne({ where: { user_id: user_id } });

            if (!check_if_user_exists) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            };

            const comment = await Comments.create(data);

            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getAll(req, res) {
        try {
            const comments = await Comments.findAll({
                include: Post,
                plain: true,
            });

            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getById(req, res) {
        const { comment_id } = req.body;

        try {
            const comment = await Comments.findOne({
                where: {
                    comment_id: comment_id
                },
                include: Post,
                plain: true,
            });

            if (!comment) {
                return res.status(404).json({
                    status: 404,
                    message: "Comment not found",
                });
            };

            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async updateById(req, res) {
        const { comment_id, content } = req.body;

        try {
            const comment = await Comments.findOne({ where: { comment_id: comment_id } });

            if (!comment) {
                return res.status(404).json({
                    status: 404,
                    message: "Comment not found",
                });
            };

            const update_comment = await Comments.update({ content: content }, {
                where: { comment_id: comment_id }
            });

            if (update_comment === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to update comment.",
                });
            };

            const updated_comment = await Comments.findOne({ where: { comment_id: comment_id } });

            res.status(200).json({
                status: 200,
                message: "User updated successfully!",
                user: updated_comment,
            });

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async deleteById(req, res) {
        const { comment_id } = req.body;

        try {
            const check_if_comment_exists = await Comments.findOne({
                where: {
                    comment_id: comment_id
                },
                include: Post,
                plain: true,
            });

            if (!check_if_comment_exists) {
                return res.status(404).json({
                    status: 404,
                    message: "Comment not found",
                });
            };

            const comment = await Comments.destroy({ where: { comment_id: comment_id } });

            if (comment === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to delete comment.",
                });
            };

            res.status(200).json({
                status: 200,
                message: "Comment deleted successfully!",
            });

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };
};