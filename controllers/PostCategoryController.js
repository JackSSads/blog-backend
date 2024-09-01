const Post_Category = require("../models/Post_Category");

module.exports = class PostCategoryController {

    static async create(req, res) {
        try {
            const { post_id, category_id } = req.body;

            const post_category = await Post_Category.create({ post_id, category_id });

            if (!post_category) {
                return res.status(500).json({
                    status: 500,
                    message: "Post-category no created!",
                });
            };

            res.status(201).json(post_category);
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
            const post_categories = await Post_Category.findAll();

            res.status(200).json(post_categories);
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
            const { post_id, category_id } = req.body;

            const post_category = await Post_Category.findOne({ where: { post_id: post_id, category_id: category_id } });

            res.status(200).json(post_category);
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

            const { post_id, category_id } = req.body;

            const check_if_post_category_existis = await Post_Category.findOne({ where: { post_id: post_id, category_id: category_id } });

            if (!check_if_post_category_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Post-category not found!",
                });
            };

            const update_post_category = await Post_Category.update({ post_id, category_id }, { where: { post_id, category_id } });

            if (!update_post_category) {
                return res.status(500).json({
                    status: 500,
                    message: "Post-Category no updated!",
                });
            };

            const updated_post_category = await Post_Category.findOne({ where: { post_id, category_id } });

            res.status(200).json({
                status: 200,
                message: "Post-Category updated successfully!",
                data: updated_post_category,
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

            const { post_id, category_id } = req.body;

            const check_if_post_category_existis = await Post_Category.findOne({ where: { post_id: post_id, category_id: category_id } });

            if (!check_if_post_category_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Post-category not found!",
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