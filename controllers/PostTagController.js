const Post_Tag = require("../models/Post_tag");

module.exports = class PostCategoryController {

    static async create(req, res) {
        try {
            const { post_id, tag_id } = req.body;

            const post_tag = await Post_Tag.create({ post_id, tag_id: tag_id });

            if (!post_tag) {
                return res.status(500).json({
                    status: 500,
                    message: "Post-Tag no created!",
                });
            };

            res.status(201).json(post_tag);
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
            const post_tags = await Post_Tag.findAll();

            res.status(200).json(post_tags);
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
            const { post_id, tag_id } = req.body;

            const post_tag = await Post_Tag.findOne({ where: { post_id: post_id, tag_id: tag_id } });

            res.status(200).json(post_tag);
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

            const { post_id, tag_id } = req.body;

            const check_if_post_tag_existis = await Post_Tag.findOne({ where: { post_id: post_id, tag_id: tag_id } });

            if (!check_if_post_tag_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Post-Tag not found!",
                });
            };

            const update_post_tag = await Post_Tag.update({ post_id, tag_id }, { where: { post_id, tag_id } });

            if (!update_post_tag) {
                return res.status(500).json({
                    status: 500,
                    message: "Post-Category no updated!",
                });
            };

            const updated_post_tag = await Post_Tag.findOne({ where: { post_id, tag_id } });

            res.status(200).json({
                status: 200,
                message: "Post-Tag updated successfully!",
                data: updated_post_tag,
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

            const { post_id, tag_id } = req.body;

            const check_if_post_tag_existis = await Post_Tag.findOne({ where: { post_id: post_id, tag_id: tag_id } });

            if (!check_if_post_tag_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Post-Tag not found!",
                });
            }

        } catch (error) {
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };
};