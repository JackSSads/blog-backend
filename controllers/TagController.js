const Tag = require("../models/Tag");

module.exports = class TagController {

    static async create(req, res) {
        try {

            const { name } = req.body;

            const tag = await Tag.create({ name: name });

            if (!tag) {
                return res.status(500).json({
                    status: 500,
                    message: "Tag no created!",
                });
            };

            res.status(201).json(tag);
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

            const tags = await Tag.findAll();

            res.status(200).json(tags);
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

            const { tag_id } = req.body;

            const tag = await Tag.findOne({ where: { name: tag_id } });

            res.status(200).json(tag);
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

            const { tag_id, name } = req.body;

            const check_if_tag_existis = await Tag.findOne({ where: { tag_id: tag_id } });

            if (!check_if_tag_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Tag not found!",
                });
            };

            const update_tag = await Tag.update({ name }, { where: { tag_id: tag_id } });

            if (!update_tag) {
                return res.status(500).json({
                    status: 500,
                    message: "updateTag no updated!",
                });
            };

            const updated_tag = await Tag.findOne({ where: { tag_id: tag_id } });

            res.status(200).json({
                status: 200,
                message: "User updated successfully!",
                data: updated_tag,
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

            const { tag_id } = req.body;

            const check_of_tag_existis = await Tag.findOne({ where: { name: tag_id } });

            if (!check_of_tag_existis) {
                return res.status(404).json({
                    status: 404,
                    message: "Tag no found!",
                });
            };

            const delete_tag = await Tag.destroy({ where: { tag_id: tag_id } });

            if (!delete_tag) {
                return res.status(500).json({
                    status: 500,
                    message: "Tag no deleted!",
                });
            };

            res.status(200).json({
                status: 200,
                message: "Tag deleted successfully!",
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