const Post = require("../models/Post");

module.exports = class PostController {

    static async create(req, res) {
        try {
            const { post_id, user_id, title, content } = req.body;

            const data = {
                title,
                content,
                post_id,
                user_id,
            };

            const post = await Post.create(data);

            if (!post) {
                if (!category) {
                    return res.status(500).json({
                        status: 500,
                        message: "Post no created!",
                    });
                };
            };

            res.status(201).json(post);
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

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getById(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async updateById(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async deleteById(req, res) {
        try {

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };
};