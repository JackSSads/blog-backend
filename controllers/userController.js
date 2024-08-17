const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = class UserController {

    static async create(req, res) {

        const { username, email, password, role } = req.body;

        // check if email exists
        const checkIfEmail = await User.findOne({ where: { email: email } });
        if (checkIfEmail) {
            return res.status(409).json({
                status: 409,
                message: "Email already registered!",
            });
        };

        // check if user exists
        const checkIfUser = await User.findOne({ where: { username: username } });
        if (checkIfUser) {
            return res.status(409).json({
                status: 409,
                message: "User already registered!",
            });
        };

        // create a password
        const salt = bcrypt.genSaltSync(10);
        const hashadPassword = bcrypt.hashSync(password, salt);

        const data = {
            role,
            email,
            password_hash: hashadPassword,
            username,
        };

        try {
            const user = await User.create(data);
            res.status(201).json(user);
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
            const users = await User.findAll()

            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async getByUsername(req, res) {
        const { username } = req.params;

        try {
            const user = await User.findOne({ where: { username: username } });

            if (!user) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                });
            };

            res.status(200).json(user);

        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async updateByUsername(req, res) {
        const { username, email, password, role } = req.body;

        // check if email exists
        const checkIfEmail = await User.findOne({ where: { email: email } });
        if (checkIfEmail) {
            return res.status(409).json({
                status: 409,
                message: "Email already registered!",
            });
        };

        // check if user exists
        const checkIfUser = await User.findOne({ where: { username: username } });
        if (checkIfUser) {
            return res.status(409).json({
                status: 409,
                message: "User already registered!",
            });
        };

        // update a password
        const salt = bcrypt.genSaltSync(10);
        const hashadPassword = bcrypt.hashSync(password, salt);

        const data = {
            role,
            email,
            password_hash: hashadPassword,
            username,
        };

        try {
            const user = await User.update(data, { where: { username: username } });

            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                status: 500,
                message: "An internal server error occorred",
                error: error.message,
            });
        };
    };

    static async delete(req, res) {

    };
};