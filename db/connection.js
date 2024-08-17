const { Sequelize } = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

try {
    connection.authenticate();
    console.log("[RUNNING] - Conectado ao bando de dados.");
} catch (error) {
    return new Error(`[ERROR] - ${error}`)
};

module.exports = connection;