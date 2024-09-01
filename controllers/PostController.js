const Post = require("../models/Post");

module.exports = class PostController {

    static async create(req, res) {
        try {

            const { content, title, user_id, published_at } = req.body;

            const data = { content, title, user_id, published_at };

            const post = await Post.create(data);

            if (!post) {
                return res.status(500).json({
                    status: 500,
                    message: "Post no created!",
                });
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

            const posts = await Post.findAll();

            res.status(200).json(posts);
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

            const { post_id } = req.body;

            const post = await Post.findOne({ where: { post_id: post_id } });

            if (!post) {
                return res.status(404).json({
                    status: 404,
                    message: "Post no found!",
                })
            };

            res.status(200).json(post);
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

            const { post_id, content, title, user_id, published_at } = req.body;

            const check_if_post_exists = await Post.findOne({ where: { post_id: post_id } });

            if (!check_if_post_exists) {
                return res.status(404).json({
                    status: 404,
                    message: "Post no found!",
                });
            };

            const data = { content, title, user_id, published_at };

            const update_post = await Post.update(data, { where: { post_id: post_id } });

            if (!update_post) {
                return res.status(500).json({
                    status: 500,
                    message: "Post no updated!",
                });
            };

            const updated_post = await Post.findOne({ where: { post_id: post_id } });

            res.status(200).json({
                status: 200,
                message: "Post updated successfully!",
                data: updated_post,
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
        try {
            const { post_id } = req.body;

            const check_if_post_exists = await Post.findOne({ where: { post_id: post_id } });

            if (!check_if_post_exists) {
                return res.status(404).json({
                    status: 404,
                    message: "Post no found!",
                });
            };

            res.status(200).json({
                status: 200,
                message: "Post deleted successfully!",
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