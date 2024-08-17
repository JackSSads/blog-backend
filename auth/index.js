require("dotenv").config();

// Buscar usuário no banco para comparar com id vindo do front
const User = require('../models/User');

const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.headers.cookie.split('Authorization=')[1];

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await User.findOne({ id: decoded.id });

        if (!user) {
            throw new Error("User not found!");
        };

        req.token = token;
        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized access!" });
    };
};

module.exports = auth;