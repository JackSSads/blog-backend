const Category = require("../models/Category");

module.exports = class CategoryController {

    static async create(req, res) {
        const { name, description } = req.body;

        const data = {
            name,
            description,
        };

        try {

            const category = await Category.create(data);

            res.status(201).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getAll(req, res) {
        try {
            const categories = await Category.findAll();

            res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getById(req, res) {
        const { category_id } = req.body;

        try {
            const category = await Category.findOne({ where: { category_id: category_id } });

            if (category) {
                return res.status(404).json({
                    status: 404,
                    message: "Category not found",
                });
            };

            res.status(200).json(category);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async updateById(req, res) {
        const { category_id, name, description } = req.body;

        const data = {
            name,
            description,
        };

        try {
            const category = await Category.update(data, { where: { category_id: category_id } });

            if (category === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to update user.",
                });
            };

            const update_category = await Category.findOne({ where: { category_id: category_id } })

            res.status(200).json({
                status: 200,
                message: "Category updated successfully!",
                category: update_category,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async deleteById(req, res) {
        const { category_id } = req.body;

        try {
            const category = await Category.destroy({ where: { category_id: category_id } });

            if (category === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to delete category.",
                });
            };

            res.status(200).json({
                status: 200,
                message: "Category deleted successfully!",
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };
};