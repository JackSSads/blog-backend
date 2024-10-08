const User = require("../models/User");
const bcrypt = require("bcrypt");
const { Op } = require('sequelize');

module.exports = class UserController {

    static async create(req, res) {
        try {

            const { username, email, password, role } = req.body;

            // check if email exists
            const check_if_email = await User.findOne({ where: { email: email } });
            if (check_if_email) {
                return res.status(409).json({
                    status: 409,
                    message: "Email already registered!",
                });
            };

            // check if user exists
            const check_if_user = await User.findOne({ where: { username: username } });
            if (check_if_user) {
                return res.status(409).json({
                    status: 409,
                    message: "User already registered!",
                });
            };

            // create a password
            const salt = bcrypt.genSaltSync(10);
            const hashad_password = bcrypt.hashSync(password, salt);

            const data = {
                role,
                email,
                password_hash: hashad_password,
                username,
            };

            const user = await User.create(data);

            if (!user) {
                return res.status(500).json({
                    status: 500,
                    message: "User no created!",
                });
            };

            res.status(201).json(user);
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
            const users = await User.findAll();

            res.status(200).json(users);
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

            const { user_id } = req.params;

            const user = await User.findOne({ where: { user_id: user_id } });

            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            };

            res.status(200).json(user);
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

            const { user_id } = req.params;
            const { username, email, password, role } = req.body;

            // check if user exists
            const check_if_user = await User.findOne({
                where: { username: username, user_id: { [Op.ne]: user_id } }
            });

            // check if email belongs to another user
            const user_with_email = await User.findOne({
                where: { email: email, user_id: { [Op.ne]: user_id } }
            });

            if (check_if_user) {
                return res.status(409).json({
                    status: 409,
                    message: "User already registered!",
                });
            };

            if (user_with_email) {
                return res.status(409).json({
                    status: 409,
                    message: "E-mail already registered!",
                });
            };

            // update a password
            const salt = bcrypt.genSaltSync(10);
            const hashad_password = bcrypt.hashSync(password, salt);

            const data = { role, email, password_hash: hashad_password, username };

            const update_user = await User.update(data, { where: { user_id: user_id } });

            if (update_user === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to update user.",
                });
            };

            const updated_user = await User.findOne({ where: { user_id: user_id } });

            res.status(200).json({
                status: 200,
                message: "User updated successfully!",
                data: updated_user,
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

            const { user_id } = req.params;

            // check if user exists
            const check_if_user = await User.findOne({ where: { user_id: user_id } });

            if (!check_if_user) {
                return res.status(409).json({
                    status: 409,
                    message: "User not registered!",
                });
            };

            const delet_user = await User.destroy({ where: { user_id: user_id } });

            if (delet_user === 0) {
                return res.status(500).json({
                    status: 500,
                    message: "Failed to delete user.",
                });
            };

            res.status(200).json({
                status: 200,
                message: "User deleted successfully!",
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